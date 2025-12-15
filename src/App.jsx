import React, { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { useTodoStore } from "./stores/todoStore";
import { useUIStore } from "./stores/uiStore";
import "./App.css"

export default function App() {
  const fetchTodos = useTodoStore((s) => s.fetchTodos);
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={`app ${theme}`}>
      <h1 className="title">Zustand Todo App</h1>

      <button className="theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <AddTodo />
      <Filter />
      <TodoList />

      <p className="footer">Data is persisted in localStorage ✔</p>
    </div>
  );
}