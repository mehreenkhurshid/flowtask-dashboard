import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function useTasks() {
    return useContext(TaskContext);
}