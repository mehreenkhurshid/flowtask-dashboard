import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import RecentTasks from "./components/RecentTasks";
import ProjectProgress from "./components/ProjectProgress";
import UpcomingTasks from "./components/UpcomingTasks";
import Tasks from "./pages/Tasks";
import { TaskProvider } from "./context/TaskContext.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import { ToastProvider } from "./context/ToastContext.jsx";
import Toast from "./components/Toast";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("flowtask_theme") || "Light";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "Dark") {
            root.classList.add("dark");
        } else if (theme === "Light") {
            root.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            root.classList.toggle("dark", prefersDark);
        }
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);

        localStorage.setItem(
            "flowtask_theme",
            newTheme
        );
    };

    return (
        <Router>
            <ToastProvider>
            <TaskProvider>
                <Toast/>

                <ScrollToTop />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

                {/* Sidebar */}
                <Sidebar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

                {/* Main Content */}
                <main className="md:ml-64 min-h-screen">

                    {/* Top Header */}
                    <header className="h-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-5 sm:px-8">

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-3 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                        >
                            <FaBars />
                        </button>

                        {/* Desktop Heading */}
                        <div className="hidden md:block">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Welcome back 👋
                            </p>

                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Dashboard
                            </h2>
                        </div>

                        {/* Mobile Heading */}
                        <div className="md:hidden text-right">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Welcome back 👋
                            </p>

                            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                                Dashboard
                            </h2>
                        </div>

                    </header>

                    {/* Routes */}
                    <Routes>

                        {/* Dashboard */}
                        <Route
                            path="/"
                            element={
                                <section className="p-5 sm:p-8">

                                    <div className="max-w-7xl mx-auto">

                                        {/* Page Introduction */}
                                        <div className="mb-8">
                                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                                                Good morning, Mehreen!
                                            </h1>

                                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                                Here's what's happening with your tasks today.
                                            </p>
                                        </div>

                                        {/* Stats Cards */}
                                        <StatsCards />

                                        {/* Recent Tasks */}
                                        <RecentTasks />

                                        {/* Progress + Upcoming */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                                            <ProjectProgress />
                                            <UpcomingTasks />
                                        </div>

                                    </div>

                                </section>
                            }
                        />

                        {/* Tasks */}
                        <Route
                            path="/tasks"
                            element={<Tasks />}
                        />

                        {/* Projects */}
                        <Route
                            path="/projects"
                            element={<Projects />}
                        />

                        <Route
                            path="/projects/:id"
                            element={<ProjectDetails />}
                        />

                        {/* Projects */}
                        <Route
                            path="/calendar"
                            element={<Calendar />}
                        />

                        {/* Settings */}
                        <Route
                            path="/settings"
                            element={<Settings
                                theme={theme}
                                onThemeChange={handleThemeChange}
                            />}
                        />


                    </Routes>

                </main>

            </div>
                </TaskProvider>
            </ToastProvider>
        </Router>
    );
}