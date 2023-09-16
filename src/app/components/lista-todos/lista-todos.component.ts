import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';
import { StorageTodosService } from '../../services/storage-todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
})
export class ListaTodosComponent {
  isChecked: 'pending' | 'completed' = 'completed'; // Propiedad para almacenar el estado del checkbox

  constructor(private storageTodosService: StorageTodosService) {}

  get todos(): Todos[] {
    return this.storageTodosService.todos;
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

  eliminarTodo(index: number) {
    const myArr = this.todos;
    myArr.splice(index, 1);
    this.storageTodosService.modificacionTodos(myArr);
  }

  cambioDeEstadoTodo(index: number) {
    const myArr = this.todos;
    if (myArr[index].estado === 'pending') {
      myArr[index].estado = 'completed';
    } else {
      myArr[index].estado = 'pending';
    }
    this.storageTodosService.modificacionTodos(myArr);
  }
}
