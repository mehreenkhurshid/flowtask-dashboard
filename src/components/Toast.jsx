import {
    FaCheckCircle,
    FaExclamationCircle,
    FaInfoCircle,
    FaTimes,
} from "react-icons/fa";

import { useToast } from "../context/ToastContext";


export default function Toast() {

    const { toast, hideToast } = useToast();

    if (!toast) return null;


    const getToastStyle = () => {

        if (toast.type === "error") {
            return {
                container:
                    "border-red-100",
                icon:
                    "bg-red-50 text-red-500",
                title:
                    "Action Failed",
            };
        }


        if (toast.type === "info") {
            return {
                container:
                    "border-blue-100",
                icon:
                    "bg-blue-50 text-blue-500",
                title:
                    "Information",
            };
        }


        return {
            container:
                "border-green-100",
            icon:
                "bg-green-50 text-green-500",
            title:
                "Success",
        };
    };


    const style = getToastStyle();


    const getIcon = () => {

        if (toast.type === "error") {
            return <FaExclamationCircle />;
        }

        if (toast.type === "info") {
            return <FaInfoCircle />;
        }

        return <FaCheckCircle />;
    };


    return (
        <div
            className={`
                fixed
                top-5
                right-5
                z-[100]
                w-[calc(100%-2rem)]
                sm:w-auto
                sm:min-w-[320px]
                max-w-sm
                bg-white
                border
                ${style.container}
                rounded-xl
                shadow-xl
                px-4
                py-3.5
                flex
                items-center
                gap-3
            `}
        >

            {/* Icon */}

            <div
                className={`
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    ${style.icon}
                `}
            >
                {getIcon()}
            </div>


            {/* Message */}

            <div className="flex-1 min-w-0">

                <p className="text-sm font-semibold text-gray-800">
                    {style.title}
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                    {toast.message}
                </p>

            </div>


            {/* Close */}

            <button
                type="button"
                onClick={hideToast}
                className="
                    text-gray-400
                    hover:text-gray-600
                    transition
                    flex-shrink-0
                "
            >
                <FaTimes className="text-xs" />
            </button>

        </div>
    );
}