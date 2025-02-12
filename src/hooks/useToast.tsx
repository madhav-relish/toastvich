import React from "react";
import { createContext, useContext, useState } from "react";
import { toastContextType, toastType } from "../types/toastTypes";
import ToastContainer from "../components/toast";

export const ToastContext = createContext<toastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Toast must be in <ToastProvide/>!");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<toastType[]>([]);

  const showToast = (
    message: string,
    type: toastType["type"] = "default",
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  const removeToast = (id: number)=>{
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ showToast, toasts, removeToast }}>
      {children}
      <ToastContainer/>
    </ToastContext.Provider>
  );
};
