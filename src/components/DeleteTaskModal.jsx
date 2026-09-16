import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

export default function DeleteTaskModal({
                                               isOpen,
                                               onClose,
                                               task,
                                               onConfirm,
                                           }) {
    if (!isOpen || !task) {
        return null;
    }

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/40 dark:bg-black/60 z-50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                <div
                    className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Close Button */}
                    <div className="flex justify-end px-5 pt-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 transition"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 text-center">

                        {/* Icon */}
                        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 text-xl mb-5">
                            <FaExclamationTriangle />
                        </div>

                        {/* Heading */}
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Delete Task?
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                            Are you sure you want to delete this task?
                        </p>

                        {/* Task Name */}
                        <div className="mt-4 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                            <p className="font-semibold text-gray-700 dark:text-gray-200 truncate">
                                {task.title}
                            </p>
                        </div>

                        <p className="text-xs text-gray-400  dark:text-gray-500 mt-3">
                            This action cannot be undone.
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-center gap-3 mt-6">

                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={onConfirm}
                                className="px-5 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                            >
                                Delete Task
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}