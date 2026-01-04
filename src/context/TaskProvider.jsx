import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { TaskContext } from "./TaskContext";
import { fetchTasks, postTask, editTask, deleteTask, fetchTaskById } from "../services/api";

export function TaskProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    if (!user?.token) return;

    setLoading(true);
    setError("");

    try {
      const data = await fetchTasks({ token: user.token });
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.token]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const addTask = async (taskData) => {
    if (!user?.token) throw new Error("Не авторизован");
    setLoading(true);
    try {
      await postTask({ token: user.token, task: taskData });
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async ({ id, task }) => {
    if (!user?.token) throw new Error("Не авторизован");
    setLoading(true);
    try {
      await editTask({ token: user.token, id, task });
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    if (!user?.token) throw new Error("Не авторизован");
    setLoading(true);
    try {
      await deleteTask({ token: user.token, id });
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

  const getTaskById = async (id) => {
    if (!user?.token) return null;
    try {
      const task = await fetchTaskById({ token: user.token, id });
      return task;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        updateTask,
        deleteTask: removeTask,
        getTaskById,
        refreshTasks: loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}