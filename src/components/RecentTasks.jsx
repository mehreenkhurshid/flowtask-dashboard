import { useState } from "react";
import {
    FaCheckCircle,
    FaClock,
    FaSpinner,
    FaEllipsisH,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ViewTaskModal from "./ViewTaskModal";

import { useTasks } from "../context/useTasks";

export default function RecentTasks() {
    const { tasks } = useTasks();

    const [selectedTask, setSelectedTask] = useState(null);

    const recentTasks = tasks.slice(-5).reverse();

    const getStatusStyle = (status) => {
        if (status === "Completed") {
            return "bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400";
        }

        if (status === "In Progress") {
            return "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400";
        }

        return "bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400";
    };

    const getStatusIcon = (status) => {
        if (status === "Completed") {
            return <FaCheckCircle />;
        }

        if (status === "In Progress") {
            return <FaSpinner />;
        }

        return <FaClock />;
    };

    const formatDate = (date) => {
        const parsedDate = new Date(date);

        return parsedDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (

        <>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm mt-8 overflow-hidden">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 border-b border-gray-100 dark:border-gray-700">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        Recent Tasks
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Keep track of your latest tasks
                    </p>
                </div>

                <Link
                    to="/tasks"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    View All
                </Link>
            </div>

            {/* Tasks */}
            <div className="divide-y divide-gray-100 dark:divide-gray-700">

                {recentTasks.map((task) => (
                    <div
                        key={task.id}
                        className="p-5 hover:bg-gray-50  dark:hover:bg-gray-700/50 transition"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                            {/* Task Information */}
                            <div className="flex items-start gap-4 min-w-0">

                                {/* Status Icon */}
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                                    {getStatusIcon(task.status)}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-semibold text-gray-800 dark:text-white truncate">
                                        {task.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {task.project}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex items-center justify-between sm:justify-end gap-4">

                                {/* Due Date */}
                                <div className="text-left sm:text-right">
                                    <p className="text-xs text-gray-400 dark:text-gray-500">
                                        Due Date
                                    </p>

                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
                                        {formatDate(task.dueDate)}
                                    </p>
                                </div>

                                {/* Status */}
                                <span
                                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                                        task.status
                                    )}`}
                                >
                                    {task.status}
                                </span>

                                {/* More */}
                                <button
                                    onClick={() => {
                                        setSelectedTask(task);
                                        console.log("Selected Task:", task);
                                    }}
                                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"
                                >
                                    <FaEllipsisH />
                                </button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

            <ViewTaskModal
                isOpen={!!selectedTask}
                onClose={() => setSelectedTask(null)}
                task={selectedTask}
            />

        </>


    );
}