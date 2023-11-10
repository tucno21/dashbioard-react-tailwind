import { useEffect, useCallback } from 'react';

interface ToastProps {
    toastlist: ToastItem[];
    setList: (toastlist: ToastItem[]) => void;
}

type ToastItem = {
    id: number;
    status: "success" | "error" | "warning" | "info";
    message: string;
    timer?: number;
};

const SuccessIcon: React.FC<{ width: number; height: number }> = ({ width, height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>
);

const ErrorIcon: React.FC<{ width: number; height: number }> = ({ width, height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
);

const WarningIcon: React.FC<{ width: number; height: number }> = ({ width, height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
    </svg>
);

const InfoIcon: React.FC<{ width: number; height: number }> = ({ width, height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
);

const iconStatus = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
};

const borderStatus = {
    success: "border-none",
    error: "border-none",
    warning: "border-none",
    info: "border-none",
};

const bgStatus = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
};

const textStatus = {
    success: "text-white",
    error: "text-white",
    warning: "text-white",
    info: "text-white",
};

const Toast = ({ toastlist, setList }: ToastProps) => {

    const deleteToast = useCallback((id: number) => {
        const toastListItem = toastlist.filter(e => e.id !== id);
        setList(toastListItem);
    }, [toastlist, setList]);

    useEffect(() => {
        const timerIds: ReturnType<typeof setTimeout>[] = [];

        toastlist.forEach((toast) => {
            if (toast.timer) {
                const timerId = setTimeout(() => {
                    deleteToast(toast.id);
                }, toast.timer);
                timerIds.push(timerId);
            }
        });

        console.log(timerIds);

        return () => {
            timerIds.forEach((timerId) => clearTimeout(timerId));
        }
    }, [toastlist, deleteToast]);

    return (
        <div className={`fixed top-10 right-2 flex flex-col gap-2 items-end w-auto z-50`}>
            {
                toastlist.map((toast, i) => (
                    <div key={i} className={`relative z-50 animation-sacudiendo flex items-center px-3 py-4 text-sm border-2 rounded-lg max-w-sm shadow-lg ${textStatus[toast.status]} ${borderStatus[toast.status]} ${bgStatus[toast.status]}`} >
                        <span className="mr-2">{iconStatus[toast.status]({ width: 20, height: 20 })}</span>
                        <p className="mr-5">{toast.message}</p>
                        <button className='absolute top-2 right-2 text-slate-600 hover:text-black' onClick={() => deleteToast(toast.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Toast