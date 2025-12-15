import {create} from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [
            { id: Date.now(), title: text, completed: false },
            ...state.todos,
          ],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),

      fetchTodos: async () => {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const data = await res.json();

        set({ todos: data });
      },
    }),
    { name: "zustand-todos" }
  )
);