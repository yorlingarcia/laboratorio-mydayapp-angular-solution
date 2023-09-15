import { Component } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { StorageTodosService } from 'src/app/services/storage-todos.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  value: string = '';
  todoArray: Todos[] = [];
  miArrayJSON = JSON.stringify(this.todoArray);

  constructor(
    private todosService: TodosService,
    private storageService: StorageTodosService
  ) {
    this.todoArray = this.storageService.getTodoStorage();
  }

  onEnter() {
    this.storageService.setTodoStorage(
      this.storageService.getCounter(),
      this.value.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    );
    this.value = '';
  }
}
