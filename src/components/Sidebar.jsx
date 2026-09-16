import { useState } from "react";

import {
    FaHome,
    FaTasks,
    FaFolder,
    FaCalendarAlt,
    FaCog,
    FaSignOutAlt,
    FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { useToast } from "../context/ToastContext";


export default function Sidebar({ isOpen, setIsOpen }) {

    // ================= LOGOUT MODAL =================

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const { showToast } = useToast();


    // ================= MENU ITEMS =================

    const menuItems = [
        {
            name: "Dashboard",
            icon: <FaHome />,
            path: "/",
        },
        {
            name: "Tasks",
            icon: <FaTasks />,
            path: "/tasks",
        },
        {
            name: "Projects",
            icon: <FaFolder />,
            path: "/projects",
        },
        {
            name: "Calendar",
            icon: <FaCalendarAlt />,
            path: "/calendar",
        },
    ];


    // ================= LOGOUT =================

    const handleLogout = () => {

        setShowLogoutModal(false);

        setIsOpen(false);

        showToast(
            "You have been logged out successfully.",
            "success"
        );

    };


    return (
        <>
            {/* ================= MOBILE OVERLAY ================= */}

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}


            {/* ================= SIDEBAR ================= */}

            <aside
                className={`
                    fixed top-0 left-0 z-50
                    h-screen w-64
                    bg-white  dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800
                    shadow-lg lg:shadow-none
                    transform transition-transform duration-300
                    ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }
                `}
            >

                {/* ================= LOGO ================= */}

                <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">

                    <h1 className="text-2xl font-extrabold">
                        <span className="text-indigo-600">
                            Flow
                        </span>

                        <span className="text-gray-800 dark:text-white">
                            Task
                        </span>
                    </h1>


                    {/* Mobile Close Button */}

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-lg transition"
                    >
                        <FaTimes />
                    </button>

                </div>


                {/* ================= NAVIGATION ================= */}

                <nav className="p-4">

                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-3 mb-3">
                        Main Menu
                    </p>


                    <div className="space-y-1">

                        {menuItems.map((item) => (

                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    w-full
                                    flex items-center gap-3
                                    px-4 py-3
                                    rounded-xl
                                    text-sm font-medium
                                    transition
                                    ${
                                        isActive
                                            ? "bg-indigo-50 text-indigo-600"
                                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600"
                                    }
                                    `
                                }
                            >

                                <span className="text-base">
                                    {item.icon}
                                </span>

                                {item.name}

                            </NavLink>

                        ))}

                    </div>


                    {/* ================= OTHER ================= */}

                    <div className="mt-8">

                        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
                            Other
                        </p>


                        {/* ================= SETTINGS ================= */}

                        <NavLink
                            to="/settings"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `
                                w-full
                                flex items-center gap-3
                                px-4 py-3
                                rounded-xl
                                text-sm font-medium
                                transition
                                ${
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600"
                                }
                                `
                            }
                        >

                            <FaCog />

                            Settings

                        </NavLink>


                        {/* ================= LOGOUT ================= */}

                        <button
                            type="button"
                            onClick={() => setShowLogoutModal(true)}
                            className="
                                w-full
                                flex items-center gap-3
                                px-4 py-3
                                rounded-xl
                                text-sm font-medium
                                text-gray-600 dark:text-gray-300
                                hover:bg-red-50 dark:hover:bg-red-950/30
                                hover:text-red-500
                                transition
                                mt-1
                            "
                        >

                            <FaSignOutAlt />

                            Logout

                        </button>

                    </div>

                </nav>

            </aside>


            {/* ================= LOGOUT MODAL ================= */}

            {showLogoutModal && (

                <div className="
                    fixed
                    inset-0
                    z-[60]
                    flex
                    items-center
                    justify-center
                    bg-black/40
                    backdrop-blur-sm
                    px-4
                ">

                    <div className="
                        w-full
                        max-w-md
                        bg-white dark:bg-gray-800
                        rounded-2xl
                        shadow-2xl
                        p-6
                        animate-in
                        fade-in
                        zoom-in
                        duration-200
                    ">


                        {/* Logout Icon */}

                        <div className="
                            w-12
                            h-12
                            rounded-xl
                            bg-red-50
                            text-red-500
                            flex
                            items-center
                            justify-center
                            mb-5
                        ">
                            <FaSignOutAlt />
                        </div>


                        {/* Heading */}

                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Logout?
                        </h2>


                        {/* Description */}

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                            Are you sure you want to logout from your account?
                        </p>


                        {/* Actions */}

                        <div className="flex justify-end gap-3 mt-6">

                            {/* Cancel */}

                            <button
                                type="button"
                                onClick={() => setShowLogoutModal(false)}
                                className="
                                    px-5
                                    py-2.5
                                    rounded-xl
                                    border
                                    border-gray-200 dark:border-gray-700
                                    text-sm
                                    font-semibold
                                    text-gray-600 dark:text-gray-300
                                    hover:bg-gray-50 dark:hover:bg-gray-700
                                    transition
                                "
                            >
                                Cancel
                            </button>


                            {/* Logout */}

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="
                                    px-5
                                    py-2.5
                                    rounded-xl
                                    bg-red-500
                                    text-white
                                    text-sm
                                    font-semibold
                                    hover:bg-red-600
                                    shadow-sm
                                    transition
                                "
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}