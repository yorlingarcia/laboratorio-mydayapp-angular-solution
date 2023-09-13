import { Component } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  todoArray: Todos[] = [];

  constructor(private todosService: TodosService) {
    this.todoArray = this.todoArray;
  }
}
