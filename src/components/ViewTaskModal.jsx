import {
    FaTimes,
    FaCalendarAlt,
    FaFolder,
    FaCircle,
    FaAlignLeft,
} from "react-icons/fa";

export default function ViewTaskModal({
                                          isOpen,
                                          onClose,
                                          task,
                                      }) {
    if (!isOpen || !task) {
        return null;
    }

    const formatDate = (date) => {
        const parsedDate = new Date(date);

        return parsedDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const getStatusColor = () => {
        if (task.status === "Completed") {
            return "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-500/10";
        }

        if (task.status === "In Progress") {
            return "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10";
        }

        return "text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-500/10";
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/40 dark:bg-black/60 z-50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto">

                <div
                    className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Header */}
                    <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">

                        <div className="min-w-0 pr-4">
                            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
                                Task Details
                            </p>

                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-1 break-words">
                                {task.title}
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200 transition"
                        >
                            <FaTimes />
                        </button>

                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-4">

                        {/* Project + Status */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Project */}
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <FaFolder />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-400 dark:text-gray-500">
                                            Project
                                        </p>

                                        <p className="font-semibold text-gray-700 dark:text-gray-200 truncate mt-0.5">
                                            {task.project}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Status */}
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10  text-indigo-600 dark:text-indigo-400">
                                        <FaCircle className="text-xs" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">
                                            Status
                                        </p>

                                        <span
                                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mt-1 ${getStatusColor()}`}
                                        >
                                            {task.status}
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* Due Date */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">

                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                <FaCalendarAlt />
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 dark:text-gray-500">
                                    Due Date
                                </p>

                                <p className="font-semibold text-gray-700 dark:text-gray-200 mt-0.5">
                                    {formatDate(task.dueDate)}
                                </p>
                            </div>

                        </div>

                        {/* Description */}
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">

                            <div className="flex items-center gap-3 mb-3">

                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                    <FaAlignLeft />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400  dark:text-gray-500">
                                        Description
                                    </p>
                                </div>

                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {task.description
                                    ? task.description
                                    : "No description added for this task."}
                            </p>

                        </div>

                        {/* Task ID */}
                        <div className="text-center pt-1">
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Task #{task.id}
                            </p>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                        >
                            Close
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}