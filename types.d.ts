export interface ITodo {
  id: string;
  title: string;
  done: boolean;
  date: number;
}

export type SelectType = "all" | "incomplete" | "completed";

export interface IModal {
  isOpen: boolean;
  name: "add" | "edit";
  value?: ITodo;
}
