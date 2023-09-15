import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageTodosService {
  constructor() {}
  todoArray: Todos[] = [];

  setTodoStorage(id: number, descripcion: string) {
    this.todoArray.push({ id, descripcion, estado: 'pending' });
    const miArrayJSON = JSON.stringify(this.todoArray);
    localStorage.setItem('mydayapp-angular', miArrayJSON);
  }

  getTodoStorage() {
    const todoJSONRecuperado = localStorage.getItem('mydayapp-angular');
    if (todoJSONRecuperado) {
      this.todoArray = JSON.parse(todoJSONRecuperado);
      return this.todoArray;
    } else {
      return [];
    }
  }

  getCounter() {
    const counter = localStorage.getItem('counter');
    if (counter) {
      const toNumber = Number(counter) + 1;
      localStorage.setItem('counter', `${toNumber}`);
      return toNumber;
    } else {
      localStorage.setItem('counter', `${0}`);
      return 0;
    }
  }
}
