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
  isChecked: boolean = false; // Propiedad para almacenar el estado del checkbox

  constructor(private storageTodosService: StorageTodosService) {}

  get todos(): Todos[] {
    return this.storageTodosService.todos;
  }

  onCheckboxChange(): void {
    // Este método se ejecutará cuando el estado del checkbox cambie
    if (this.isChecked) {
      console.log('El checkbox ha sido seleccionado.');
    } else {
      console.log('El checkbox ha sido deseleccionado.');
    }
  }

  eliminarTodo(i: number) {
    const myArr = this.todos;
    myArr.splice(i, 1);
    this.storageTodosService.modificacionTodos(myArr);
  }
}
