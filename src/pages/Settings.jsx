import { useState } from "react";

import {
    FaUser,
    FaBell,
    FaTasks,
    FaPalette,
    FaSave,
    FaChevronDown,
    FaCheckCircle,
} from "react-icons/fa";

import { useToast } from "../context/ToastContext";


const defaultSettings = {
    name: "Mehreen Khurshid",
    email: "mehreenkhurshid8@gmail.com",
    selectedStatus: "Pending",
    selectedTheme: "Light",
    taskNotifications: true,
    deadlineReminders: true,
};


export default function Settings({ theme, onThemeChange }) {

    // ================= SETTINGS =================

    const [settings, setSettings] = useState(() => {

        const savedSettings =
            localStorage.getItem("flowtask_settings");

        if (savedSettings) {
            return {
                ...defaultSettings,
                ...JSON.parse(savedSettings),
            };
        }

        return defaultSettings;
    });


    // ================= DROPDOWNS =================

    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);


    // ================= TOAST =================

    const { showToast } = useToast();


    // ================= OPTIONS =================

    const statusOptions = [
        "Pending",
        "In Progress",
        "Completed",
    ];

    const themeOptions = [
        "Light",
        "Dark",
        "System Default",
    ];


    // ================= UPDATE SETTING =================

    // const updateSetting = (key, value) => {
    //
    //     setSettings((prev) => ({
    //         ...prev,
    //         [key]: value,
    //     }));
    //
    // };

    const updateSetting = (key, value) => {

        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));

        if (key === "selectedTheme") {
            onThemeChange(value);
        }

    };


    // ================= SAVE SETTINGS =================

    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.setItem(
            "flowtask_settings",
            JSON.stringify(settings)
        );

        showToast(
            "Your settings have been saved successfully.",
            "success"
        );

    };


    return (

        <section className="p-5 sm:p-8">

            <div className="max-w-5xl mx-auto">


                {/* ================= PAGE INTRO ================= */}

                <div className="mb-8">

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                        Settings
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Manage your profile and application preferences
                    </p>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >


                    {/* ================= PROFILE ================= */}

                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                <FaUser />
                            </div>

                            <div>

                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Profile
                                </h2>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Update your personal information
                                </p>

                            </div>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


                            {/* Name */}

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={settings.name}
                                    onChange={(e) =>
                                        updateSetting(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        text-sm
                                        text-gray-700
                                        dark:text-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        focus:border-transparent
                                        transition
                                        bg-white
                                        dark:bg-gray-700
                                    "
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) =>
                                        updateSetting(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        bg-white
                                        dark:bg-gray-700
                                        text-sm
                                        text-gray-700
                                        dark:text-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        focus:border-transparent
                                        transition
                                    "
                                />

                            </div>

                        </div>

                    </div>



                    {/* ================= NOTIFICATIONS ================= */}

                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                <FaBell />
                            </div>

                            <div>

                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Notifications
                                </h2>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Manage your notification preferences
                                </p>

                            </div>

                        </div>


                        <div className="space-y-4">


                            {/* Task Notifications */}

                            <label className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition cursor-pointer">

                                <div>

                                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                                        Task Notifications
                                    </p>

                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                                        Receive reminders about your tasks
                                    </p>

                                </div>

                                <input
                                    type="checkbox"
                                    checked={
                                        settings.taskNotifications
                                    }
                                    onChange={(e) =>
                                        updateSetting(
                                            "taskNotifications",
                                            e.target.checked
                                        )
                                    }
                                    className="w-4 h-4 accent-indigo-600 cursor-pointer"
                                />

                            </label>


                            {/* Deadline Reminders */}

                            <label className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition cursor-pointer">

                                <div>

                                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                                        Deadline Reminders
                                    </p>

                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                                        Get notified when deadlines are approaching
                                    </p>

                                </div>

                                <input
                                    type="checkbox"
                                    checked={
                                        settings.deadlineReminders
                                    }
                                    onChange={(e) =>
                                        updateSetting(
                                            "deadlineReminders",
                                            e.target.checked
                                        )
                                    }
                                    className="w-4 h-4 accent-indigo-600 cursor-pointer"
                                />

                            </label>

                        </div>

                    </div>



                    {/* ================= TASK PREFERENCES ================= */}

                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                <FaTasks />
                            </div>

                            <div>

                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Task Preferences
                                </h2>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Customize how your tasks are managed
                                </p>

                            </div>

                        </div>


                        {/* Default Status */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Default Task Status
                            </label>


                            <div className="relative w-full sm:w-1/2">


                                {/* Dropdown Button */}

                                <button
                                    type="button"
                                    onClick={() => {

                                        setIsStatusOpen(
                                            !isStatusOpen
                                        );

                                        setIsThemeOpen(false);

                                    }}
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        px-4
                                        py-3
                                        bg-white
                                        dark:bg-gray-700
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        rounded-xl
                                        text-sm
                                        font-medium
                                        text-gray-700
                                        dark:text-gray-200
                                        shadow-sm
                                        hover:border-indigo-300
                                        hover:bg-gray-50
                                        dark:hover:bg-gray-600
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        transition
                                    "
                                >

                                    <span>
                                        {settings.selectedStatus}
                                    </span>

                                    <FaChevronDown
                                        className={`
                                            text-gray-400
                                            dark:text-gray-300
                                            text-xs
                                            transition-transform
                                            duration-200
                                            ${
                                            isStatusOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                        `}
                                    />

                                </button>


                                {/* Dropdown Menu */}

                                {isStatusOpen && (

                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-2
                                            w-full
                                            bg-white
                                            dark:bg-gray-800
                                            border
                                            border-gray-100
                                            dark:border-gray-700
                                            rounded-xl
                                            shadow-xl
                                            p-2
                                            z-30
                                        "
                                    >

                                        {statusOptions.map(
                                            (option) => {

                                                const isSelected =
                                                    settings.selectedStatus ===
                                                    option;

                                                return (

                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => {

                                                            updateSetting(
                                                                "selectedStatus",
                                                                option
                                                            );

                                                            setIsStatusOpen(
                                                                false
                                                            );

                                                        }}
                                                        className={`
                                                            w-full
                                                            flex
                                                            items-center
                                                            justify-between
                                                            px-3
                                                            py-2.5
                                                            rounded-lg
                                                            text-sm
                                                            font-medium
                                                            text-left
                                                            transition
                                                            ${
                                                            isSelected
                                                                ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600"
                                                        }
                                                        `}
                                                    >

                                                        <span>
                                                            {option}
                                                        </span>

                                                        {isSelected && (
                                                            <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-sm" />
                                                        )}

                                                    </button>

                                                );

                                            }
                                        )}

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>



                    {/* ================= APPEARANCE ================= */}

                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                <FaPalette />
                            </div>

                            <div>

                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Appearance
                                </h2>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Choose your preferred interface style
                                </p>

                            </div>

                        </div>


                        {/* Theme */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Theme
                            </label>


                            <div className="relative w-full sm:w-1/2">


                                {/* Dropdown Button */}

                                <button
                                    type="button"
                                    onClick={() => {

                                        setIsThemeOpen(
                                            !isThemeOpen
                                        );

                                        setIsStatusOpen(false);

                                    }}
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        px-4
                                        py-3
                                        bg-white
                                        dark:bg-gray-700
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        rounded-xl
                                        text-sm
                                        font-medium
                                        text-gray-700
                                        dark:text-gray-200
                                        shadow-sm
                                        hover:border-indigo-300
                                        hover:bg-gray-50
                                        dark:hover:bg-gray-600
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        transition
                                    "
                                >

                                    <span>
                                        {settings.selectedTheme}
                                    </span>

                                    <FaChevronDown
                                        className={`
                                            text-gray-400
                                            dark:text-gray-300
                                            text-xs
                                            transition-transform
                                            duration-200
                                            ${
                                            isThemeOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                        `}
                                    />

                                </button>


                                {/* Dropdown Menu */}

                                {isThemeOpen && (

                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-2
                                            w-full
                                            bg-white
                                            dark:bg-gray-800
                                            border
                                            border-gray-100
                                            dark:border-gray-700
                                            rounded-xl
                                            shadow-xl
                                            p-2
                                            z-30
                                        "
                                    >

                                        {themeOptions.map(
                                            (option) => {

                                                const isSelected =
                                                    settings.selectedTheme ===
                                                    option;

                                                return (

                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => {

                                                            updateSetting(
                                                                "selectedTheme",
                                                                option
                                                            );

                                                            setIsThemeOpen(
                                                                false
                                                            );

                                                        }}
                                                        className={`
                                                            w-full
                                                            flex
                                                            items-center
                                                            justify-between
                                                            px-3
                                                            py-2.5
                                                            rounded-lg
                                                            text-sm
                                                            font-medium
                                                            text-left
                                                            transition
                                                            ${
                                                            isSelected
                                                                ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600"
                                                        }
                                                        `}
                                                    >

                                                        <span>
                                                            {option}
                                                        </span>

                                                        {isSelected && (
                                                            <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-sm" />
                                                        )}

                                                    </button>

                                                );

                                            }
                                        )}

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>



                    {/* ================= SAVE BUTTON ================= */}

                    <div className="flex justify-end">

                        <button
                            type="submit"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-6
                                py-3
                                rounded-xl
                                bg-indigo-600
                                text-white
                                text-sm
                                font-semibold
                                hover:bg-indigo-700
                                shadow-sm
                                transition
                            "
                        >

                            <FaSave />

                            Save Changes

                        </button>

                    </div>


                </form>

            </div>

        </section>
    );
}