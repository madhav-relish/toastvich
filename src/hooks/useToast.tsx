import React from "react";
import { createContext, useContext, useState } from "react";
import { toastContextType, toastType } from "../types/toastTypes";
import ToastContainer from "../components/toast";

export const ToastContext = createContext<toastContextType | undefined>(
  undefined
);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Toast must be in <ToastProvide/>!");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<toastType[]>([]);

  const showToast = ({
    message,
    type = "default",
    duration = 3000,
    render,
    position = "bottom-center"
  }: Omit<toastType, "id">) => {
    const id = Math.random()*8123;
    setToasts((prev) => [...prev, { id, message, type, duration, render, position }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, toasts, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
