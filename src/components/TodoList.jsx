import React from "react";
import { useTodoStore } from "../stores/todoStore";

export default function TodoList() {
  const todos = useTodoStore((s) => s.todos);
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <li key={t.id} className="todo">
          <span
            className={`todo-text ${t.completed ? "done" : ""}`}
            onClick={() => toggleTodo(t.id)}
          >
            {t.title}
          </span>

          <button className="delete-btn" onClick={() => deleteTodo(t.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}