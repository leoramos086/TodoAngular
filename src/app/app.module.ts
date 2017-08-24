import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [TodosService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
