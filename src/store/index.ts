import { create } from "zustand";
import { TodoType } from "../../types";

interface TodoStoreType {
  todos: TodoType[] | [];
  addTodo: (todo: TodoType) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, todo: string) => void;
}

const initialValue: TodoType[] = [
  {
    id: 1,
    title: "Hello World",
    completed: false,
  },
  {
    id: 2,
    title: "Lorem ipsum",
    completed: true,
  },
];

export const TodoStore = create<TodoStoreType>()((set) => ({
  todos: [...initialValue],

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  editTodo: (id, todo) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, title: todo };
        }
        return item;
      }),
    })),
}));
