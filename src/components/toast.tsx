import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../hooks/useToast";
import { toastType } from "../types/toastTypes";

const toastStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
  warning: "bg-yellow-500 text-black",
  default: "bg-gray-500 text-white",
};

const ToastContainer = () => {
  const context = useContext(ToastContext);
  if (!context) return null;

  const { toasts } = context;

  return (
    <div className="fixed top-5 right-5 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

const Toast = ({ toast }: { toast: toastType }) => {
  const context = useContext(ToastContext);
  if (!context) return null;

  const { removeToast } = context;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), toast.duration || 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const closeToast = () => {
    setShow(false);
    setTimeout(() => removeToast(toast.id), 500);
  };

  return (
    <div
      className={`flex items-center justify-between p-3 rounded shadow-md transition-all duration-500 ease-in-out transform ${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      } ${toastStyles[toast.type ?? "default"]}`}
    >
      <span>{toast.message}</span>
      <button
        className="ml-4 text-white bg-black px-2 py-1 rounded hover:bg-gray-800"
        onClick={closeToast}
      >
        ✖
      </button>
    </div>
  );
};

export default ToastContainer;
