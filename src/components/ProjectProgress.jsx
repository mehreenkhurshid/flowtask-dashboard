import { useTasks } from "../context/useTasks";
import {Link} from "react-router-dom";

export default function ProjectProgress() {
    const { tasks } = useTasks();

    const projectList = [
        {
            id: 1,
            name: "FoodEase Website",
            projectKey: "FoodEase",
        },
        {
            id: 2,
            name: "FlowTask Dashboard",
            projectKey: "FlowTask",
        },
        {
            id: 3,
            name: "Mini Ecommerce",
            projectKey: "Mini Ecommerce",
        },
        {
            id: 4,
            name: "Portfolio Website",
            projectKey: "Portfolio",
        },
    ];

    const projects = projectList.map((project) => {
        const projectTasks = tasks.filter(
            (task) => task.project === project.projectKey
        );

        const totalTasks = projectTasks.length;

        const completedTasks = projectTasks.filter(
            (task) => task.status === "Completed"
        ).length;

        const progress =
            totalTasks === 0
                ? 0
                : Math.round((completedTasks / totalTasks) * 100);

        return {
            ...project,
            tasks: `${completedTasks} / ${totalTasks} tasks`,
            progress,
        };
    });

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700  shadow-sm p-5">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        Project Progress
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400  mt-1">
                        Track your project completion
                    </p>
                </div>

                <Link
                    to="/tasks"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    View All
                </Link>
            </div>

            {/* Projects */}
            <div className="space-y-6">

                {projects.map((project) => (
                    <div key={project.id}>

                        <div className="flex justify-between items-center mb-2 gap-3">

                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200 truncate">
                                    {project.name}
                                </h3>

                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    {project.tasks}
                                </p>
                            </div>

                            <span className="text-sm font-bold text-indigo-600 flex-shrink-0">
                                {project.progress}%
                            </span>

                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                                style={{
                                    width: `${project.progress}%`,
                                }}
                            />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}