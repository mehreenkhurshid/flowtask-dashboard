import { createContext, useContext, useState } from "react";

export const ToastContext = createContext();

export function ToastProvider({ children }) {

    const [toast, setToast] = useState(null);

    const showToast = (message, type = "success") => {

        setToast({
            message,
            type,
        });

        setTimeout(() => {
            setToast(null);
        }, 2500);
    };

    const hideToast = () => {
        setToast(null);
    };

    return (
        <ToastContext.Provider
            value={{
                toast,
                showToast,
                hideToast,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}


export function useToast() {

    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToast must be used inside ToastProvider"
        );
    }

    return context;
}