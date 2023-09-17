import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageTodosService } from 'src/app/services/storage-todos.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private todosService: TodosService,
    private storageTodoService: StorageTodosService,
    private route: Router
  ) {}

  get pluralizacionItem() {
    if (this.lengthTodos != 1) {
      return 'items';
    } else return 'item';
  }

  get lengthTodos() {
    if (this.route.url === '/all') {
      return this.todosService.todosAll.length;
    } else if (this.route.url === '/pending') {
      return this.todosService.todosPending.length;
    } else {
      return this.todosService.todosCompleted.length;
    }
  }

  get completed() {
    return this.todosService.todosCompleted;
  }

  eliminarTodoCompleted() {
    this.storageTodoService.cambioEstadoTodos(this.todosService.todosPending);
  }
}
