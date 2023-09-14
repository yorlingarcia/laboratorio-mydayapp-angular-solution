import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos.interface';
import { StorageTodosService } from './storage-todos.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  listaTodos: Todos[] = [];
  constructor(private storageTodosService: StorageTodosService) {}
}
