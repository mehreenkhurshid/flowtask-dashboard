import { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaCalendarDay,
} from "react-icons/fa";

import { useTasks } from "../context/useTasks";

export default function Calendar() {
    const { tasks } = useTasks();

    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString("en-US", {
        month: "long",
    });

    // First day of current month
    const firstDay = new Date(year, month, 1).getDay();

    // Number of days in current month
    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();

    // Previous month
    const previousMonth = () => {
        setCurrentDate(
            new Date(year, month - 1, 1)
        );
    };

    // Next month
    const nextMonth = () => {
        setCurrentDate(
            new Date(year, month + 1, 1)
        );
    };

    // Today
    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Create calendar days
    const calendarDays = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    // Check if date is today
    const isToday = (day) => {
        if (!day) return false;

        const today = new Date();

        return (
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    // Get tasks for specific date
    const getTasksForDate = (day) => {
        if (!day) return [];

        const dateString = `${year}-${String(
            month + 1
        ).padStart(2, "0")}-${String(day).padStart(
            2,
            "0"
        )}`;

        return tasks.filter(
            (task) => task.dueDate === dateString
        );
    };

    // Status styles
    const getStatusStyle = (status) => {
        if (status === "Completed") {
            return "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20";
        }

        if (status === "In Progress") {
            return "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20";
        }

        return "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-500/20";
    };

    return (
        <section className="p-5 sm:p-8">

            <div className="max-w-7xl mx-auto">

                {/* Page Introduction */}
                <div className="mb-8">

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                        Calendar
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        View your tasks and deadlines by date
                    </p>

                </div>


                {/* Calendar Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">

                    {/* Calendar Header */}
                    <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                            {/* Month */}
                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                    <FaCalendarDay />
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {monthName} {year}
                                    </h2>

                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        Your task schedule
                                    </p>
                                </div>

                            </div>


                            {/* Right Side */}
                            <div className="flex flex-wrap items-center gap-4">

                                {/* Status Legend */}
                                <div className="flex flex-wrap items-center gap-3">

                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />

                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            Completed
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-blue-500" />

                                        <span className="text-xs text-gray-500">
                                            In Progress
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500" />

                                        <span className="text-xs text-gray-500">
                                            Pending
                                        </span>
                                    </div>

                                </div>


                                {/* Controls */}
                                <div className="flex items-center gap-2">

                                    <button
                                        type="button"
                                        onClick={goToToday}
                                        className="
                                            px-3
                                            py-2
                                            rounded-lg
                                            border
                                            border-gray-200
                                            dark:border-gray-600
                                            text-xs
                                            font-semibold
                                            text-gray-600
                                            dark:text-gray-300
                                            hover:bg-gray-50
                                            dark:hover:bg-gray-700
                                            transition
                                        "
                                    >
                                        Today
                                    </button>

                                    <button
                                        type="button"
                                        onClick={previousMonth}
                                        className="
                                            w-8
                                            h-8
                                            rounded-lg
                                            border
                                            border-gray-200
                                            dark:border-gray-600
                                            flex
                                            items-center
                                            justify-center
                                            text-gray-500
                                            dark:text-gray-300
                                            hover:bg-gray-50
                                            dark:hover:bg-gray-700
                                            hover:text-indigo-600
                                            transition
                                        "
                                    >
                                        <FaChevronLeft className="text-xs" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextMonth}
                                        className="
                                            w-8
                                            h-8
                                            rounded-lg
                                            border
                                            border-gray-200
                                            dark:border-gray-600
                                            flex
                                            items-center
                                            justify-center
                                            text-gray-500
                                            dark:text-gray-300
                                            hover:bg-gray-50
                                            dark:hover:bg-gray-700
                                            hover:text-indigo-600
                                            transition
                                        "
                                    >
                                        <FaChevronRight className="text-xs" />
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Calendar */}
                    <div className="p-3 sm:p-4 overflow-x-auto">

                        <div className="min-w-[700px]">

                            {/* Week Days */}
                            <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-700">

                                {[
                                    "Sun",
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                ].map((day) => (
                                    <div
                                        key={day}
                                        className="
                                            py-2.5
                                            text-center
                                            text-[11px]
                                            font-semibold
                                            text-gray-400
                                            dark:text-gray-500
                                            uppercase
                                        "
                                    >
                                        {day}
                                    </div>
                                ))}

                            </div>


                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7">

                                {calendarDays.map(
                                    (day, index) => {

                                        const dayTasks =
                                            getTasksForDate(day);

                                        return (
                                            <div
                                                key={index}
                                                className="
                                                    min-h-[90px]
                                                    border-r
                                                    border-b
                                                    border-gray-100
                                                    dark:border-gray-700
                                                    p-2
                                                    hover:bg-gray-50
                                                    dark:hover:bg-gray-700/50
                                                    transition
                                                "
                                            >

                                                {/* Date Number */}
                                                {day && (
                                                    <div
                                                        className={`
                                                            w-7
                                                            h-7
                                                            rounded-lg
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-xs
                                                            font-semibold
                                                            mb-1.5
                                                            ${
                                                            isToday(day)
                                                                ? "bg-indigo-600 text-white"
                                                                : "text-gray-600 dark:text-gray-300"
                                                        }
                                                        `}
                                                    >
                                                        {day}
                                                    </div>
                                                )}


                                                {/* Tasks */}
                                                <div className="space-y-1">

                                                    {dayTasks.map(
                                                        (task) => (
                                                            <div
                                                                key={task.id}
                                                                className={`
                                                                    px-2
                                                                    py-1
                                                                    rounded-md
                                                                    border
                                                                    text-[11px]
                                                                    font-medium
                                                                    truncate
                                                                    ${getStatusStyle(
                                                                    task.status
                                                                )}
                                                                `}
                                                                title={
                                                                    task.title
                                                                }
                                                            >
                                                                {task.title}
                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}