import { ITodo, IModal, SelectType } from "./../../types.d";
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
  viewTodo: ITodo[] = this.todo;
  modal: IModal | object = {};
  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: ITodo) => {
    this.todo = [...this.todo, todo];
    this.viewTodo = this.todo;
  };

  editTodo = (id: string, title: string) => {
    this.todo = this.todo.map((item) => {
      if (item.id == id) {
        item.title = title;
      }
      return item;
    });
    this.viewTodo = this.todo;
  };

  removeTodo = (id: string) => {
    this.todo = this.todo.filter((item) => item.id != id);
    this.viewTodo = this.todo;
  };

  isCheckedTodo = (id: string) => {
    this.todo = this.todo.map((item) => {
      if (item.id == id) {
        item.done = !item.done;
      }
      return item;
    });
    this.viewTodo = this.todo;
  };

  todoView = (value: SelectType) => {
    if (value === "completed") {
      this.viewTodo = this.todo.filter((item) => item.done === true);
    } else if (value === "incomplete") {
      this.viewTodo = this.todo.filter((item) => item.done === false);
    } else {
      this.viewTodo = this.todo;
    }
  };

  addModal = (modalValue: IModal): void => {
    this.modal = modalValue;
  };

  removeModal = (): void => {
    this.modal = {};
  };
}

export default new TodoSlice();
