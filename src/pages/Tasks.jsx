import { useState } from "react";
import {
    FaSearch,
    FaPlus,
    FaCheckCircle,
    FaSpinner,
    FaClock,
    FaChevronDown,
} from "react-icons/fa";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DeleteTaskModal from "../components/DeleteTaskModal";
import ViewTaskModal from "../components/ViewTaskModal";
import { useTasks } from "../context/useTasks";
import { useToast } from "../context/ToastContext";


export default function Tasks() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);
    const [selectedViewTask, setSelectedViewTask] = useState(null);

    const {
        tasks,
        addTask,
        updateTask,
        deleteTask,
    } = useTasks();

    // Toast
    const { showToast } = useToast();

    const handleUpdateTask = (updatedTask) => {
        updateTask(updatedTask);

        setIsEditTaskOpen(false);
        setSelectedTask(null);

        showToast(
            "Task updated successfully.",
            "success"
        );
    };

    const handleDeleteTask = () => {
        deleteTask(taskToDelete.id);

        setIsDeleteTaskOpen(false);
        setTaskToDelete(null);

        showToast(
            "Task deleted successfully.",
            "success"
        );
    };

    // Status options
    const statusOptions = [
        {
            value: "All",
            label: "All Tasks",
        },
        {
            value: "Completed",
            label: "Completed",
        },
        {
            value: "In Progress",
            label: "In Progress",
        },
        {
            value: "Pending",
            label: "Pending",
        },
    ];

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.project.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            selectedStatus === "All" ||
            task.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusStyle = (status) => {
        if (status === "Completed") {
            return "bg-green-50 text-green-600";
        }

        if (status === "In Progress") {
            return "bg-blue-50 text-blue-600";
        }

        return "bg-yellow-50 text-yellow-600";
    };

    const getStatusIcon = (status) => {
        if (status === "Completed") {
            return <FaCheckCircle />;
        }

        if (status === "In Progress") {
            return <FaSpinner />;
        }

        return <FaClock />;
    };

    const selectedOption =
        statusOptions.find(
            (option) => option.value === selectedStatus
        ) || statusOptions[0];

    const formatDate = (date) => {
        if (!date) return "";

        // Already formatted date
        if (date.includes(",")) {
            return date;
        }

        // New date from input type="date"
        const [year, month, day] = date.split("-");

        const dateObj = new Date(year, month - 1, day);

        return dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <section className="p-5 sm:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-50">
                            Tasks
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage and keep track of all your tasks.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsAddTaskOpen(true)}
                        className="
                            inline-flex items-center justify-center gap-2
                            px-5 py-3
                            bg-indigo-600
                            text-white
                            rounded-xl
                            font-semibold
                            hover:bg-indigo-700
                            transition
                            shadow-sm
                        "
                    >
                        <FaPlus />
                        Add Task
                    </button>

                </div>


                {/* Search + Filter */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 mb-6">

                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Search */}
                        <div className="relative flex-1">

                            <FaSearch
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />

                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }
                                placeholder="Search tasks or projects..."
                                className="
                                    w-full
                                    pl-11
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border border-gray-200 dark:border-gray-600
                                    bg-white dark:bg-gray-700
                                    text-gray-700 dark:text-gray-200
                                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    transition
                                "
                            />

                        </div>


                        {/* Custom Status Dropdown */}
                        <div className="relative w-full md:w-56">

                            {/* Dropdown Button */}
                            <button
                                type="button"
                                onClick={() =>
                                    setIsFilterOpen(!isFilterOpen)
                                }
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    px-4
                                    py-3
                                    bg-white dark:bg-gray-700
                                    border
                                    border-gray-200 dark:border-gray-600
                                    rounded-xl
                                    text-sm
                                    font-medium
                                    text-gray-700 dark:text-gray-200
                                    shadow-sm
                                    hover:border-indigo-300
                                    hover:bg-gray-50
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-indigo-400
                                    transition
                                "
                            >

                                <span>
                                    {selectedOption.label}
                                </span>

                                <FaChevronDown
                                    className={`
                                        text-gray-400
                                        text-xs
                                        transition-transform
                                        duration-200
                                        ${
                                        isFilterOpen
                                            ? "rotate-180"
                                            : ""
                                    }
                                    `}
                                />

                            </button>


                            {/* Dropdown Menu */}
                            {isFilterOpen && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-full
                                        mt-2
                                        w-full
                                        bg-white dark:bg-gray-800
                                        border
                                        border-gray-100 dark:border-gray-700
                                        rounded-xl
                                        shadow-xl
                                        p-2
                                        z-30
                                    "
                                >

                                    {statusOptions.map((option) => {

                                        const isSelected =
                                            selectedStatus ===
                                            option.value;

                                        return (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedStatus(
                                                        option.value
                                                    );
                                                    setIsFilterOpen(false);
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
                                                        ? "bg-indigo-50 text-indigo-600"
                                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600"
                                                }
                                                `}
                                            >

                                                <span>
                                                    {option.label}
                                                </span>

                                                {isSelected && (
                                                    <FaCheckCircle className="text-indigo-600 text-sm" />
                                                )}

                                            </button>
                                        );
                                    })}

                                </div>
                            )}

                        </div>

                    </div>

                </div>


                {/* Task List */}
                <div className="bg-white  dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">

                    {/* Desktop Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100  dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400  uppercase">

                        <div className="col-span-5">
                            Task
                        </div>

                        <div className="col-span-2">
                            Project
                        </div>

                        <div className="col-span-2">
                            Due Date
                        </div>

                        <div className="col-span-2">
                            Status
                        </div>

                        <div className="col-span-1"></div>

                    </div>


                    {/* Tasks */}
                    {filteredTasks.length === 0 ? (

                        <div className="text-center py-14">

                            <p className="text-gray-500 dark:text-gray-300 font-medium">
                                No tasks found.
                            </p>

                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                                Try another search or status.
                            </p>

                        </div>

                    ) : (

                        filteredTasks.map((task) => (

                            <div
                                key={task.id}
                                className="
                                    px-5 sm:px-6
                                    py-5
                                    border-b
                                    border-gray-100 dark:border-gray-700
                                    last:border-b-0
                                    hover:bg-gray-50 dark:hover:bg-gray-700/50
                                    transition
                                "
                            >

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                                    {/* Task */}
                                    <div className="md:col-span-5 flex items-center gap-3">

                                        <div
                                            className="
                                                w-10
                                                h-10
                                                rounded-xl
                                                bg-indigo-50 dark:bg-indigo-950/50
                                                text-indigo-600 dark:text-indigo-400
                                                flex
                                                items-center
                                                justify-center
                                                flex-shrink-0
                                            "
                                        >
                                            {getStatusIcon(task.status)}
                                        </div>

                                        <div className="min-w-0">

                                            <h3 className="font-semibold text-gray-800 dark:text-white truncate">
                                                {task.title}
                                            </h3>

                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                Task #{task.id}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Project */}
                                    <div className="md:col-span-2">

                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {task.project}
                                        </p>

                                    </div>


                                    {/* Due Date */}
                                    <div className="md:col-span-2">

                                        <p className="text-sm text-gray-600  dark:text-gray-300">
                                            {/*{task.dueDate}*/}
                                            {formatDate(task.dueDate)}
                                        </p>

                                    </div>


                                    {/* Status */}
                                    <div className="md:col-span-2">

                                        <span
                                            className={`
                                                inline-flex
                                                items-center
                                                gap-2
                                                px-3
                                                py-1.5
                                                rounded-full
                                                text-xs
                                                font-semibold
                                                ${getStatusStyle(
                                                task.status
                                            )}
                                            `}
                                        >
                                            {task.status}
                                        </span>

                                    </div>


                                    <div className="md:col-span-1 flex items-center justify-start md:justify-end gap-2">

                                        {/* View */}
                                        <button
                                            title="View Task"
                                            onClick={() => {
                                                setSelectedViewTask(task);
                                                setIsViewTaskOpen(true);
                                            }}
                                            className="w-9 h-9 flex items-center justify-center rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition"
                                        >
                                            <FaEye />
                                        </button>

                                        {/* Edit */}
                                        <button
                                            title="Edit Task"
                                            onClick={() => {
                                                setSelectedTask(task);
                                                setIsEditTaskOpen(true);
                                            }}
                                            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                        >
                                            <FaEdit />
                                        </button>

                                        {/* Delete */}
                                        <button
                                            title="Delete Task"
                                            onClick={() => {
                                                setTaskToDelete(task);
                                                setIsDeleteTaskOpen(true);
                                            }}
                                            className="w-9 h-9 flex items-center justify-center rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

            <AddTaskModal
                isOpen={isAddTaskOpen}
                onClose={() => setIsAddTaskOpen(false)}
                onAddTask={(newTask) => {
                    addTask(newTask);

                    console.log("New Task:", newTask);
                    setIsAddTaskOpen(false);

                    showToast(
                        "Task created successfully.",
                        "success"
                    );
                }}
            />

            <EditTaskModal
                isOpen={isEditTaskOpen}
                onClose={() => {
                    setIsEditTaskOpen(false);
                    setSelectedTask(null);
                }}
                task={selectedTask}
                onUpdateTask={handleUpdateTask}
            />

            <DeleteTaskModal
                isOpen={isDeleteTaskOpen}
                onClose={() => {
                    setIsDeleteTaskOpen(false);
                    setTaskToDelete(null);
                }}
                task={taskToDelete}
                onConfirm={handleDeleteTask}
            />

            <ViewTaskModal
                isOpen={isViewTaskOpen}
                onClose={() => {
                    setIsViewTaskOpen(false);
                    setSelectedViewTask(null);
                }}
                task={selectedViewTask}
            />

        </section>
    );
}