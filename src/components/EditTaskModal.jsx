import { useState } from "react";
import {
    FaTimes,
    FaAlignLeft,
    FaChevronDown,
    FaCheckCircle,
} from "react-icons/fa";

export default function EditTaskModal({
                                          isOpen,
                                          onClose,
                                          task,
                                          onUpdateTask,
                                      }) {
    if (!isOpen || !task) {
        return null;
    }

    return (
        <EditForm
            key={task.id}
            task={task}
            onClose={onClose}
            onUpdateTask={onUpdateTask}
        />
    );
}

function EditForm({ task, onClose, onUpdateTask }) {

    const [title, setTitle] = useState(task.title || "");
    const [project, setProject] = useState(task.project || "");
    const [dueDate, setDueDate] = useState(task.dueDate || "");
    const [status, setStatus] = useState(task.status || "Pending");

    const [description, setDescription] = useState(
        task.description || ""
    );

    // Dropdown states
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const projectOptions = [
        "FlowTask",
        "FoodEase",
        "Portfolio",
        "Mini Ecommerce",
    ];

    const statusOptions = [
        "Pending",
        "In Progress",
        "Completed",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateTask({
            ...task,
            title,
            project,
            dueDate,
            status,
            description,
        });
    };

    return (
        <>
            {/* ================= OVERLAY ================= */}

            <div
                className="fixed inset-0 bg-black/40 dark:bg-black/60 z-50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* ================= MODAL ================= */}

            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                <div
                    className="
                        w-full
                        max-w-lg
                        max-h-[90vh]
                        overflow-y-auto
                        bg-white
                        dark:bg-gray-900
                        rounded-2xl
                        shadow-2xl
                        transition-colors
                    "
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* ================= HEADER ================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            px-6
                            py-5
                            border-b
                            border-gray-100
                            dark:border-gray-800
                        "
                    >

                        <div>

                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Edit Task
                            </h2>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Update your task details
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={onClose}
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
                                dark:hover:bg-gray-800
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
                        className="p-6 space-y-5"
                    >

                        {/* ================= TITLE ================= */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Task Title
                            </label>

                            <input
                                type="text"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                required
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    dark:border-gray-700
                                    bg-white
                                    dark:bg-gray-800
                                    text-gray-700
                                    dark:text-gray-200
                                    placeholder-gray-400
                                    dark:placeholder-gray-500
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    focus:border-transparent
                                    transition
                                "
                            />

                        </div>


                        {/* ================= PROJECT + DATE ================= */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* ================= PROJECT ================= */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Project
                                </label>

                                <div className="relative">

                                    {/* Dropdown Button */}

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsProjectOpen(
                                                !isProjectOpen
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
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-gray-700
                                            bg-white
                                            dark:bg-gray-800
                                            text-gray-700
                                            dark:text-gray-200
                                            text-sm
                                            font-medium
                                            hover:border-indigo-300
                                            dark:hover:border-indigo-500
                                            hover:bg-gray-50
                                            dark:hover:bg-gray-750
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-indigo-400
                                            transition
                                        "
                                    >

                                        <span>
                                            {project || "Select Project"}
                                        </span>

                                        <FaChevronDown
                                            className={`
                                                text-gray-400
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

                                            {projectOptions.map(
                                                (option) => {

                                                    const isSelected =
                                                        project === option;

                                                    return (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => {

                                                                setProject(
                                                                    option
                                                                );

                                                                setIsProjectOpen(
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
                                                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                                                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
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


                            {/* ================= DATE ================= */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Due Date
                                </label>

                                <input
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) =>
                                        setDueDate(e.target.value)
                                    }
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-gray-700
                                        bg-white
                                        dark:bg-gray-800
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


                        {/* ================= STATUS ================= */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Status
                            </label>

                            <div className="relative">

                                {/* Dropdown Button */}

                                <button
                                    type="button"
                                    onClick={() => {

                                        setIsStatusOpen(
                                            !isStatusOpen
                                        );

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
                                        dark:border-gray-700
                                        bg-white
                                        dark:bg-gray-800
                                        text-gray-700
                                        dark:text-gray-200
                                        text-sm
                                        font-medium
                                        hover:border-indigo-300
                                        dark:hover:border-indigo-500
                                        hover:bg-gray-50
                                        dark:hover:bg-gray-750
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-indigo-400
                                        transition
                                    "
                                >

                                    <span>
                                        {status}
                                    </span>

                                    <FaChevronDown
                                        className={`
                                            text-gray-400
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
                                                    status === option;

                                                return (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => {

                                                            setStatus(
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
                                                                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                                                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
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


                        {/* ================= DESCRIPTION ================= */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description
                            </label>

                            <div className="relative">

                                <FaAlignLeft
                                    className="
                                        absolute
                                        left-4
                                        top-4
                                        text-gray-400
                                    "
                                />

                                <textarea
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(
                                            e.target.value
                                        )
                                    }
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
                                        dark:border-gray-700
                                        bg-white
                                        dark:bg-gray-800
                                        text-gray-700
                                        dark:text-gray-200
                                        placeholder-gray-400
                                        dark:placeholder-gray-500
                                        resize-none
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


                        {/* ================= BUTTONS ================= */}

                        <div className="flex justify-end gap-3 pt-3">

                            {/* Cancel */}

                            <button
                                type="button"
                                onClick={onClose}
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    dark:border-gray-700
                                    text-gray-600
                                    dark:text-gray-300
                                    font-medium
                                    hover:bg-gray-50
                                    dark:hover:bg-gray-800
                                    transition
                                "
                            >
                                Cancel
                            </button>


                            {/* Save */}

                            <button
                                type="submit"
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    font-medium
                                    hover:bg-indigo-700
                                    transition
                                "
                            >
                                Save Changes
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}