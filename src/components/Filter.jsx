import React, { useState } from "react";
import { useTodoStore } from "../stores/todoStore";

export default function Filter() {
  const [filter, setFilter] = useState("all");
  const todos = useTodoStore((s) => s.todos);

  return (
    <div className="filter-box">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>

      <p className="filter-count">
        Showing:{" "}
        <strong>
          {
            todos.filter((t) =>
              filter === "all"
                ? true
                : filter === "completed"
                ? t.completed
                : !t.completed
            ).length
          }
        </strong>
      </p>
    </div>
  );
}