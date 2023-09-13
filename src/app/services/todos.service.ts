import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  listaTodos: Todos[] = [];
}
