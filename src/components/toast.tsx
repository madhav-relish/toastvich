import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../hooks/useToast";
import { toastType } from "../types/toastTypes";
import {
  CheckCircleIcon,
  XCircleIcon,
  InfoIcon,
  AlertTriangleIcon,
} from "lucide-react";

const toastStyles = {
  success: {
    className: "bg-green-600 text-white",
    icon: <CheckCircleIcon size={20} />,
  },
  error: {
    className: "bg-red-600 text-white",
    icon: <XCircleIcon size={20} />,
  },
  info: { className: "bg-blue-600 text-white", icon: <InfoIcon size={20} /> },
  warning: {
    className: "bg-yellow-600 text-black",
    icon: <AlertTriangleIcon size={20} />,
  },
  default: { className: "bg-gray-600 text-white", icon: null },
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

  const { className, icon } = toastStyles[toast.type ?? "default"];

  return (
    <div
      className={`flex min-w-96 items-center justify-between p-3 rounded shadow-md transition-all duration-500 ease-in-out transform ${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      } ${className}`}
    >
      {toast.render ? (
        toast.render
      ) : (
        <span className="flex items-center gap-2">
          {icon}
          {toast.message}
        </span>
      )}
      <span
        className=" text-white cursor-pointer px-2 py-1 "
        onClick={closeToast}
      >
        ✖
      </span>
    </div>
  );
};

export default ToastContainer;
