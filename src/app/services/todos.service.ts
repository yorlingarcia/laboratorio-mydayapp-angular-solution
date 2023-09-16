import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos.interface';
import { StorageTodosService } from './storage-todos.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private storageTodosService: StorageTodosService) {}

  get todosAll() {
    return this.storageTodosService.todos;
  }

  get todosPending() {
    return this.storageTodosService.todos.filter(
      (todo) => todo.estado === 'pending'
    );
  }

  get todosCompleted() {
    return this.storageTodosService.todos.filter(
      (todo) => todo.estado === 'completed'
    );
  }
}
