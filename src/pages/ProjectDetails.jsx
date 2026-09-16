import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

export default function ProjectDetails() {
    const { id } = useParams();

    const projects = [
        {
            id: "1",
            name: "FlowTask",
            description:
                "A modern task management dashboard designed to organize tasks, track progress, and manage projects efficiently.",

            features: [
                "Task Management",
                "Dashboard Analytics",
                "CRUD Operations",
                "Responsive Design",
            ],

            technologies: [
                "React.js",
                "Tailwind CSS",
                "React Router",
                "Context API",
                "LocalStorage",
            ],

            screenshots: [
                {
                    id: 1,
                    title: "Dashboard",
                    image: "/images/Dashboard.png",
                },
                {
                    id: 2,
                    title: "Tasks",
                    image: "/images/Tasks.png",
                },
                {
                    id: 3,
                    title: "Projects",
                    image: "/images/Projects.png",
                },
            ],
            liveUrl: "FLOWTASK_VERCEL_URL",
            githubUrl: "https://github.com/mehreenkhurshid/flowtask-dashboard",
        },

        {
            id: "2",
            name: "FoodEase",
            description:
                "A modern and responsive food delivery website focused on creating a smooth and engaging browsing experience.",

            features: [
                "Food Browsing",
                "Responsive Design",
                "Modern UI",
                "Product Cards",
            ],

            technologies: [
                "React.js",
                "Tailwind CSS",
                "React Router",
            ],

            screenshots: [
                {
                    id: 1,
                    title: "Home",
                    image: "/images/Home.png",
                },
                {
                    id: 2,
                    title: "Menu",
                    image: "/images/menu.png",
                },
                {
                    id: 3,
                    title: "Food Details",
                    image: "/images/popular.png",
                },
            ],
            liveUrl: "FLOWTASK_VERCEL_URL",
            githubUrl: "FLOWTASK_GITHUB_URL",
        },

        {
            id: "3",
            name: "Portfolio",
            description:
                "A clean and modern personal portfolio designed to showcase frontend skills, projects, and creative work.",

            features: [
                "Responsive Layout",
                "Project Showcase",
                "Modern UI",
                "Clean Navigation",
            ],

            technologies: [
                "React.js",
                "Tailwind CSS",
                "React Router",
            ],

            screenshots: [
                {
                    id: 1,
                    title: "Home",
                    image: "/images/MyPortfolio.png",
                },
                {
                    id: 2,
                    title: "Skills",
                    image: "/images/skills.png",
                },
                {
                    id: 3,
                    title: "Contacts",
                    image: "/images/contacts.png",
                },
            ],
            liveUrl: "https://personal-portfolio-jade-seven-38.vercel.app/",
            githubUrl: "https://github.com/mehreenkhurshid/personal-portfolio",
        },

        {
            id: "4",
            name: "Mini Ecommerce",
            description:
                "A responsive ecommerce experience featuring product browsing, product details, and shopping cart interactions.",

            features: [
                "Product Browsing",
                "Product Details",
                "Shopping Cart",
                "Responsive Design",
            ],

            technologies: [
                "React.js",
                "Tailwind CSS",
                "React Router",
            ],

            screenshots: [
                {
                    id: 1,
                    title: "Home",
                    image: "/images/webHome.png",
                },
                {
                    id: 2,
                    title: "Products",
                    image: "/images/products.png",
                },
                {
                    id: 3,
                    title: "Cart",
                    image: "/images/cart.png",
                },
            ],
            liveUrl: "FLOWTASK_VERCEL_URL",
            githubUrl: "FLOWTASK_GITHUB_URL",
        },
    ];

    const project = projects.find(
        (item) => item.id === id
    );

    if (!project) {
        return (
            <section className="p-5 sm:p-8">
                <div className="max-w-5xl mx-auto text-center py-20">

                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        Project Not Found
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        The project you are looking for does not exist.
                    </p>

                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                    >
                        <FaArrowLeft />
                        Back to Projects
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <section className="p-5 sm:p-8">
            <div className="max-w-6xl mx-auto">

                {/* Back */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition mb-6"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="bg-white  dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold text-indigo-600">
                            Featured Project
                        </p>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100  mt-2">
                            {project.name}
                        </h1>

                        <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                            {project.description}
                        </p>

                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-6">

                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                        >
                            <FaExternalLinkAlt className="text-xs" />
                            Live Demo
                        </a>

                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                            <FaGithub />
                            View Code
                        </a>

                    </div>

                </div>

                {/* Project Preview */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700">

                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            Project Preview
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            A visual preview of the project interface.
                        </p>

                    </div>

                    {/* Main Screenshot */}
                    <div className="p-5 sm:p-8">

                        <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 overflow-hidden">

                            <img
                                src={project.screenshots[0].image}
                                alt={project.screenshots[0].title}
                                className="w-full h-full object-contain"
                            />

                        </div>

                    </div>

                    {/* Screenshot Thumbnails */}
                    <div className="px-5 sm:px-8 pb-8">

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                            {project.screenshots.map((screenshot) => (
                                <div
                                    key={screenshot.id}
                                    className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                                >

                                    <div className="aspect-video">
                                        <img
                                            src={screenshot.image}
                                            alt={screenshot.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="px-3 py-2">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                            {screenshot.title}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

                    {/* Key Features */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            Key Features
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">

                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600"
                                >
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        {feature}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Technologies */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            Built With
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Tools and technologies used in this project.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">

                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
                                >
                                    {technology}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}