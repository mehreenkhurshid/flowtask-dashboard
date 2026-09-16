import { useState } from "react";

import {
    FaTimes,
    FaTasks,
    FaCalendarAlt,
    FaAlignLeft,
    FaChevronDown,
    FaCheckCircle,
} from "react-icons/fa";

export default function AddTaskModal({
                                         isOpen,
                                         onClose,
                                         onAddTask,
                                     }) {
    // ================= DROPDOWN STATE =================

    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const [selectedProject, setSelectedProject] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("Pending");


    // ================= OPTIONS =================

    const projectOptions = [
        "FoodEase",
        "FlowTask",
        "Portfolio",
        "Mini Ecommerce",
    ];

    const statusOptions = [
        "Pending",
        "In Progress",
        "Completed",
    ];


    // ================= SUBMIT =================

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newTask = {
            title: formData.get("title"),
            project: selectedProject,
            dueDate: formData.get("dueDate"),
            status: selectedStatus,
            description: formData.get("description"),
        };

        onAddTask(newTask);

        e.target.reset();

        setSelectedProject("");
        setSelectedStatus("Pending");

        setIsProjectOpen(false);
        setIsStatusOpen(false);
    };


    // ================= CLOSE =================

    const handleClose = () => {
        setIsProjectOpen(false);
        setIsStatusOpen(false);

        onClose();
    };


    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />


            {/* Modal */}
            <div
                className="
                    relative
                    w-full
                    max-w-lg
                    max-h-[90vh]
                    overflow-y-auto
                    bg-white dark:bg-gray-800
                    rounded-2xl
                    shadow-2xl
                    p-6
                    sm:p-7
                "
            >

                {/* ================= HEADER ================= */}

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Add New Task
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Create a new task and keep your work organized.
                        </p>

                    </div>


                    {/* Close */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            w-9
                            h-9
                            flex
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-500
                            dark:text-gray-400
                            hover:bg-gray-100
                            dark:hover:bg-gray-700
                            hover:text-gray-800
                            dark:hover:text-white
                            transition
                        "
                    >
                        <FaTimes />
                    </button>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >


                    {/* ================= TASK TITLE ================= */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Task Title
                        </label>

                        <div className="relative">

                            <FaTasks
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                    dark:text-gray-500
                                "
                            />

                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="Enter task title..."
                                className="
                                    w-full
                                    pl-11
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    dark:border-gray-600
                                    bg-white
                                    dark:bg-gray-700
                                    text-gray-700
                                    dark:text-gray-200
                                    placeholder:text-gray-400
                                    dark:placeholder:text-gray-500
                                    text-sm
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    focus:border-transparent
                                    transition
                                "
                            />

                        </div>

                    </div>


                    {/* ================= PROJECT + DATE ================= */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                        {/* ================= PROJECT ================= */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                Project
                            </label>

                            <div className="relative">

                                {/* Dropdown Button */}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsProjectOpen(!isProjectOpen);
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
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        bg-white
                                        dark:bg-gray-700
                                        text-sm
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-200
                                        hover:border-indigo-300
                                        dark:hover:border-indigo-500
                                        hover:bg-gray-50
                                        dark:hover:bg-gray-600
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        transition
                                    "
                                >

                                    <span>
                                        {selectedProject || "Select project"}
                                    </span>

                                    <FaChevronDown
                                        className={`
                                            text-gray-400
                                            dark:text-gray-500
                                            text-xs
                                            transition-transform
                                            duration-200
                                            ${
                                            isProjectOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                        `}
                                    />

                                </button>


                                {/* Dropdown Menu */}

                                {isProjectOpen && (

                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-full
                                            mt-2
                                            w-full
                                            bg-white
                                            dark:bg-gray-700
                                            border
                                            border-gray-100
                                            dark:border-gray-600
                                            rounded-xl
                                            shadow-xl
                                            p-2
                                            z-30
                                        "
                                    >

                                        {projectOptions.map((option) => {

                                            const isSelected =
                                                selectedProject === option;

                                            return (

                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedProject(option);
                                                        setIsProjectOpen(false);
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
                                                            ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                                                            : "text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400"
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

                                        })}

                                    </div>

                                )}

                            </div>

                            {/* Hidden input for FormData */}

                            <input
                                type="hidden"
                                name="project"
                                value={selectedProject}
                                required
                            />

                        </div>


                        {/* ================= DUE DATE ================= */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                Due Date
                            </label>

                            <div className="relative">

                                <FaCalendarAlt
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        dark:text-gray-500
                                    "
                                />

                                <input
                                    type="date"
                                    name="dueDate"
                                    required
                                    className="
                                        w-full
                                        pl-11
                                        pr-3
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-gray-600
                                        bg-white
                                        dark:bg-gray-700
                                        text-sm
                                        text-gray-600
                                        dark:text-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        focus:border-transparent
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= STATUS ================= */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Status
                        </label>


                        <div className="relative">

                            {/* Dropdown Button */}

                            <button
                                type="button"
                                onClick={() => {
                                    setIsStatusOpen(!isStatusOpen);
                                    setIsProjectOpen(false);
                                }}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    dark:border-gray-600
                                    bg-white
                                    dark:bg-gray-700
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    dark:text-gray-200
                                    hover:border-indigo-300
                                    dark:hover:border-indigo-500
                                    hover:bg-gray-50
                                    dark:hover:bg-gray-600
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    transition
                                "
                            >

                                <span>
                                    {selectedStatus}
                                </span>

                                <FaChevronDown
                                    className={`
                                        text-gray-400
                                        dark:text-gray-500
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
                                        dark:bg-gray-700
                                        border
                                        border-gray-100
                                        dark:border-gray-600
                                        rounded-xl
                                        shadow-xl
                                        p-2
                                        z-30
                                    "
                                >

                                    {statusOptions.map((option) => {

                                        const isSelected =
                                            selectedStatus === option;

                                        return (

                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedStatus(option);
                                                    setIsStatusOpen(false);
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
                                                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                                                        : "text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400"
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

                                    })}

                                </div>

                            )}

                        </div>

                        {/* Hidden input for FormData */}

                        <input
                            type="hidden"
                            name="status"
                            value={selectedStatus}
                        />

                    </div>


                    {/* ================= DESCRIPTION ================= */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Description
                        </label>

                        <div className="relative">

                            <FaAlignLeft
                                className="
                                    absolute
                                    left-4
                                    top-4
                                    text-gray-400
                                    dark:text-gray-500
                                "
                            />

                            <textarea
                                name="description"
                                rows="4"
                                placeholder="Add task description..."
                                className="
                                    w-full
                                    pl-11
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    dark:border-gray-600
                                    bg-white
                                    dark:bg-gray-700
                                    text-gray-700
                                    dark:text-gray-200
                                    placeholder:text-gray-400
                                    dark:placeholder:text-gray-500
                                    text-sm
                                    resize-none
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    focus:border-transparent
                                "
                            />

                        </div>

                    </div>


                    {/* ================= BUTTONS ================= */}

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-3">

                        {/* Cancel */}

                        <button
                            type="button"
                            onClick={handleClose}
                            className="
                                px-5
                                py-3
                                rounded-xl
                                border
                                border-gray-200
                                dark:border-gray-600
                                text-gray-600
                                dark:text-gray-300
                                font-semibold
                                hover:bg-gray-50
                                dark:hover:bg-gray-700
                                transition
                            "
                        >
                            Cancel
                        </button>


                        {/* Create */}

                        <button
                            type="submit"
                            className="
                                px-5
                                py-3
                                rounded-xl
                                bg-indigo-600
                                text-white
                                font-semibold
                                hover:bg-indigo-700
                                shadow-sm
                                transition
                            "
                        >
                            Create Task
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}