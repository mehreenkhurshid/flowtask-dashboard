import {
    FaTasks,
    FaCheckCircle,
    FaSpinner,
    FaClock,
} from "react-icons/fa";

import { useTasks } from "../context/useTasks";

export default function StatsCards() {
    const { tasks } = useTasks();

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const inProgressTasks = tasks.filter(
        (task) => task.status === "In Progress"
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === "Pending"
    ).length;

    const stats = [
        {
            title: "Total Tasks",
            value: totalTasks,
            icon: <FaTasks />,
            description: "All your tasks",
        },
        {
            title: "Completed",
            value: completedTasks,
            icon: <FaCheckCircle />,
            description: "Tasks completed",
        },
        {
            title: "In Progress",
            value: inProgressTasks,
            icon: <FaSpinner />,
            description: "Currently working",
        },
        {
            title: "Pending",
            value: pendingTasks,
            icon: <FaClock />,
            description: "Waiting to start",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 hover:shadow-md hover:-translate-y-1 transition duration-300"
                >
                    {/* Top */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {stat.title}
                            </p>

                            <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-2">
                                {stat.value}
                            </h3>
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-indigo-50  dark:bg-indigo-950/50 text-indigo-600  dark:text-indigo-400 flex items-center justify-center text-xl">
                            {stat.icon}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
                        {stat.description}
                    </p>
                </div>
            ))}
        </div>
    );
}