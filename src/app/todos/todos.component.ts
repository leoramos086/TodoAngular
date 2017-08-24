import { Component, OnInit } from '@angular/core';

import { TodosService, Todo } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  todos:Todo[];

  // teste(id){
  //   let text = "change!!";
  //   console.log(id)
  //   console.log(this.todos)

  //   this.todosService.editTodo(id, text)
  // }

  remove(id){
    this.todosService.removeTodo(id);
  }

 mouse(){
   alert("mouse passou em cima daqui!!")
 }
 
  completed(id, todo){
    todo.completed = !todo.completed;
    this.todosService.editTodo(id, todo);
    
  }

  ngOnInit() {
    this.todos = this.todosService.getTodos();
  }

}
