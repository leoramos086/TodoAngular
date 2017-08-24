import { Component } from '@angular/core';


import { TodosService, Todo } from '../todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private todosService: TodosService){  }

  newTodo: string;
 
  addTodo(text:string){
    if (text == "") return;

    this.todosService.addTodo({
      text: text,
      date: Date.now(),
      completed: false,

    })

    this.newTodo = "";
  }

  


}
