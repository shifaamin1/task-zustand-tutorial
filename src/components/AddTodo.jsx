import React, { useState } from "react";
import { useTodoStore } from "../stores/todoStore";

export default function AddTodo() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="add-box">
      <input
        className="input"
        placeholder="Add Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}