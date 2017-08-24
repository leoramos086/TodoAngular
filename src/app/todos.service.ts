import { Injectable } from '@angular/core';

export class Todo {
  text: string;
  date: number;
  completed: boolean;

}

@Injectable()
export class TodosService {

  private todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id){
    return this.todos.splice(id, 1);
  }

  editTodo(id: number, newTodo: Todo) {

  }


}
