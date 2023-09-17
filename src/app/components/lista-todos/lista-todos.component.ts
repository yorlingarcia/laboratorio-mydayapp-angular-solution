import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  modEdicion: boolean = false;
  @ViewChild('txtEditTodo') txtEditTodo!: ElementRef<HTMLInputElement>;
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

  onCheckboxChange(index: number): void {
    // Este método se ejecutará cuando el estado del checkbox cambie
    if (this.isChecked) {
      console.log('El checkbox ha sido seleccionado.');
      this.cambioDeEstadoTodo(index);
    } else {
      console.log('El checkbox ha sido deseleccionado.');
      this.cambioDeEstadoTodo(index);
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

  modoEdicion() {
    this.modEdicion = true;
  }

  modTodo(todo: Todos) {
    console.log(this.txtEditTodo);
  }
}
