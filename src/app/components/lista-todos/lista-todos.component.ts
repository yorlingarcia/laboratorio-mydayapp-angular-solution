import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';
import { StorageTodosService } from '../../services/storage-todos.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
})
export class ListaTodosComponent implements OnInit {
  arrayTodos: Todos[] = [];
  constructor(private storageTodosService: StorageTodosService) {
    this.arrayTodos = this.storageTodosService.getTodoStorage();
  }

  ngOnInit(): void {
    this.arrayTodos = this.storageTodosService.getTodoStorage();
  }
}
