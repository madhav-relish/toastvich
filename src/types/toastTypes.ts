

export interface toastType {
    id: number;
    message?: string;
    type: "success" | "error" | "info" | "warning" | "default";
    duration?: number;
    render?: React.ReactNode;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
}

export interface toastContextType {
    showToast: (toast: Omit<toastType, "id">) => void;
    toasts: toastType[];
    removeToast: (id: number) => void
}
