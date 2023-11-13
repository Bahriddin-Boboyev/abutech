import { ITodo, IModal } from "./../../types.d";
import { makeAutoObservable } from "mobx";

const initialValue: ITodo[] = [
  {
    id: "1",
    title: "Lorem ipsum",
    done: false,
    date: 1699873342566,
  },
];

class TodoSlice {
  todo: ITodo[] = initialValue;
  modal: IModal | object = {};
  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: ITodo) => {
    this.todo = [...this.todo, todo];
  };

  editTodo = (id: string, title: string) => {
    this.todo = this.todo.map((item) => {
      if (item.id == id) {
        item.title = title;
      }
      return item;
    });
  };

  removeTodo = (id: string) => {
    this.todo = this.todo.filter((item) => item.id != id);
  };

  isCheckedTodo = (id: string) => {
    this.todo = this.todo.map((item) => {
      if (item.id == id) {
        item.done = !item.done;
      }
      return item;
    });
  };

  addModal = (modalValue: IModal): void => {
    this.modal = modalValue;
  };

  removeModal = (): void => {
    this.modal = {};
  };
}

export default new TodoSlice();
