

export interface toastType {
    id: number;
    message?: string;
    type: "success" | "error" | "info" | "warning" | "default";
    duration?: number;
    render?: React.ReactNode
}

export interface toastContextType {
    showToast: (toast: Omit<toastType, "id">) => void;
    toasts: toastType[];
    removeToast: (id: number) => void
}
