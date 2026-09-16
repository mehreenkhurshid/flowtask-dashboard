import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { useTasks } from "../context/useTasks";
import { Link } from "react-router-dom";

export default function UpcomingTasks() {
    const { tasks } = useTasks();

    const upcomingTasks = tasks
        .filter((task) => task.status !== "Completed")
        .slice()
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 4);

    const formatDate = (date) => {
        const parsedDate = new Date(date);

        return parsedDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        Upcoming Tasks
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Tasks coming up next
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
            <div className="space-y-4">

                {upcomingTasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                    >

                        {/* Calendar Icon */}
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                            <FaCalendarAlt />
                        </div>

                        {/* Task */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-700 dark:text-gray-200 truncate">
                                {task.title}
                            </h3>

                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                {task.project}
                            </p>
                        </div>

                        {/* Date */}
                        <div className="text-right flex-shrink-0">
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Due
                            </p>

                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                                {formatDate(task.dueDate)}
                            </p>
                        </div>

                        {/*<FaArrowRight className="text-gray-300 text-sm hidden sm:block" />*/}

                    </div>
                ))}

            </div>
        </div>
    );
}