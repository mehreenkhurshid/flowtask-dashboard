import { FaFolder, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            id: "1",
            name: "FlowTask",
            description: "A modern task management dashboard.",
            features: [
                "Task Management",
                "Dashboard Analytics",
                "CRUD Operations",
            ],
        },
        {
            id: "2",
            name: "FoodEase",
            description: "A modern and responsive food delivery website.",
            features: [
                "Food Browsing",
                "Responsive Design",
                "Modern UI",
            ],
        },
        {
            id: "3",
            name: "Portfolio",
            description: "A clean and modern personal developer portfolio.",
            features: [
                "Responsive Layout",
                "Project Showcase",
                "Contact Section",
            ],
        },
        {
            id: "4",
            name: "Mini Ecommerce",
            description: "A responsive ecommerce shopping experience.",
            features: [
                "Product Browsing",
                "Shopping Cart",
                "Responsive Design",
            ],
        },
    ];

    return (
        <section className="p-5 sm:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Page Introduction */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                        Projects
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Explore my projects and frontend work
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition duration-300"
                        >

                            {/* Project Header */}
                            <div className="flex items-start gap-4">

                                {/* Project Icon */}
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                                    <FaFolder />
                                </div>

                                {/* Project Info */}
                                <div className="min-w-0">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                        {project.name}
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {project.description}
                                    </p>
                                </div>

                            </div>

                            {/* Key Features */}
                            <div className="mt-6">

                                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
                                    Key Features
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {project.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100 dark:border-gray-700 my-6" />

                            {/* Bottom */}
                            <div className="flex justify-end">

                                <Link
                                    to={`/projects/${project.id}`}
                                    className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700  dark:hover:text-indigo-300 transition"
                                >
                                    View Project

                                    <FaArrowRight className="text-xs" />
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}