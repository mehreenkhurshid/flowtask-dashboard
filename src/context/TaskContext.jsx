import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";


export function TaskProvider({ children }) {
    const defaultTasks = [
        {
            id: 1,
            title: "Design homepage",
            project: "FoodEase",
            dueDate: "Aug 20, 2026",
            status: "Completed",
        },
        {
            id: 2,
            title: "Create dashboard UI",
            project: "FlowTask",
            dueDate: "Aug 22, 2026",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Mobile responsiveness",
            project: "Portfolio",
            dueDate: "Aug 24, 2026",
            status: "Pending",
        },
        {
            id: 4,
            title: "Update product cards",
            project: "Mini Ecommerce",
            dueDate: "Aug 25, 2026",
            status: "In Progress",
        },
        {
            id: 5,
            title: "Add testimonials section",
            project: "FoodEase",
            dueDate: "Aug 27, 2026",
            status: "Completed",
        },
        {
            id: 6,
            title: "Create login page",
            project: "FlowTask",
            dueDate: "Aug 29, 2026",
            status: "Pending",
        },
    ];

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("flowtask_tasks");

        return savedTasks
            ? JSON.parse(savedTasks)
            : defaultTasks;
    });

    // Save tasks in localStorage
    useEffect(() => {
        localStorage.setItem(
            "flowtask_tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    const addTask = (newTask) => {
        const nextId =
            tasks.length > 0
                ? Math.max(...tasks.map((task) => task.id)) + 1
                : 1;

        const taskWithId = {
            id: nextId,
            ...newTask,
        };

        setTasks((prevTasks) => [
            ...prevTasks,
            taskWithId,
        ]);
    };

    // Update Task
    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        );
    };

    // Delete Task
    const deleteTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.filter(
                (task) => task.id !== taskId
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}