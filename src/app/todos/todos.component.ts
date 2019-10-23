import { Component, OnInit } from '@angular/core';

import { TodosService, Todo } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) {

   }

  todos: Todo[]

  openEdit: object = []

  // teste(id){
  //   let text = "change!!";
  //   console.log(id)
  //   console.log(this.todos)

  //   this.todosService.editTodo(id, text)
  // }
  teste() {
    alert('double-click')
  }
  remove(id) {
    this.todosService.removeTodo(id)
  }

  mouse() {
    alert("mouse passou em cima daqui!!")
  }

  edit(id, newTodo) {
    let todo = this.todos[id]
    todo.text = newTodo

    this.openEdit[id] = false
    this.todosService.editTodo(id, todo)


  }

  completed(id, todo) {
    todo.completed = !todo.completed
    this.todosService.editTodo(id, todo)

  }

  ngOnInit() {

    this.todos = this.todosService.getTodos()
  }

}

