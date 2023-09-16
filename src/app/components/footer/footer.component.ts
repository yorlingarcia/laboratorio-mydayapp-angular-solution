import { Component } from '@angular/core';
import { StorageTodosService } from 'src/app/services/storage-todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private storageTodoService: StorageTodosService) {
    this.conteoDeTodos = this.storageTodoService.todos.length;
  }

  conteoDeTodos: number = 0;

  get pluralizacionItem() {
    if (this.conteoDeTodos != 1) {
      return 'items';
    } else return 'item';
  }

  get lengthTodos() {
    return this.storageTodoService.todos.length;
  }
}
