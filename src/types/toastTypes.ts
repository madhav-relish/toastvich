export interface toastType {
    id: number;
    message: string;
    type: "success" | "error" | "info" | "warning" | "default";
    duration?: number;
}

export interface toastContextType {
    showToast: ( message: string, type: toastType["type"], duration?: number) => void;
    toasts: toastType[];
    removeToast: ( id: number) => void
}
