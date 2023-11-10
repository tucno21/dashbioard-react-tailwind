import { useState } from "react";

interface ToastProperties {
    id: number;
    status: "success" | "error" | "warning" | "info";
    message: string;
    timer?: number;
}

const useToasts = () => {
    const [list, setList] = useState<ToastProperties[]>([]);

    const toast = {
        success: (message: string, timer?: number) => {
            loadToast("success", message, timer);
        },
        error: (message: string, timer?: number) => {
            loadToast("error", message, timer);
        },
        warning: (message: string, timer?: number) => {
            loadToast("warning", message, timer);
        },
        info: (message: string, timer?: number) => {
            loadToast("info", message, timer);
        }
    }

    //crear una funcion para cargar los toasts
    const loadToast = (status: string, message: string, timer: number = 3000) => {
        const id = new Date().getTime();
        setList([...list, { id, status, message, timer } as ToastProperties]);
    }

    return { list, setList, toast };
};

export default useToasts;