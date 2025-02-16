import { Component } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';
import { StorageTodosService } from '../../services/storage-todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
})
export class ListaTodosComponent {
  isChecked: 'pending' | 'completed' = 'completed'; // Propiedad para almacenar el estado del checkbox
  editModeIndex: number | null = null;
  constructor(
    private storageTodosService: StorageTodosService,
    private route: Router,
    private todosService: TodosService
  ) {}

  get todos(): Todos[] {
    if (this.route.url === '/all') {
      return this.todosService.todosAll;
    } else if (this.route.url === '/pending') {
      return this.todosService.todosPending;
    } else {
      return this.todosService.todosCompleted;
    }
  }

  eliminarTodo(todo: Todos) {
    this.storageTodosService.modificacionTodos(todo);
  }

  cambioDeEstadoTodo(index: number) {
    const myArr = this.todos;
    if (myArr[index].estado === 'pending') {
      myArr[index].estado = 'completed';
    } else {
      myArr[index].estado = 'pending';
    }
    this.storageTodosService.cambioEstadoTodos(myArr);
  }

  enableEditMode(index: number): void {
    this.editModeIndex = index;
  }

  disableEditMode(): void {
    this.editModeIndex = null;
  }

  modificacionTodo(todo: Todos, event: any) {
    this.storageTodosService.modificacionTodos(todo, true, {
      id: todo.id,
      descripcion: event.target.value.replace(/^\s+|\s+$|\s+(?=\s)/g, ''),
      estado: todo.estado,
    });
    this.disableEditMode();
  }
}
