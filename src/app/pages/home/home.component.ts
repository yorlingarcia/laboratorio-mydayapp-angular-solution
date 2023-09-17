import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos.interface';
import { StorageTodosService } from 'src/app/services/storage-todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('registrarTodo') registrarTodo!: ElementRef<HTMLInputElement>;

  constructor(private storageService: StorageTodosService) {}

  get todos() {
    return this.storageService.todos;
  }
  onEnter() {
    const value = this.registrarTodo.nativeElement.value;
    if (value.trim() === '') {
      this.registrarTodo.nativeElement.value = '';
      return;
    }
    this.storageService.setTodoStorage(
      this.storageService.getCounter(),
      value.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    );
    this.registrarTodo.nativeElement.value = '';
  }
}
