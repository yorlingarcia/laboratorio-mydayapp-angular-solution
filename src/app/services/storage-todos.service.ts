import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageTodosService {
  constructor() {}

  getStorage() {
    if (!localStorage.getItem('mydayapp-angular')) {
      localStorage.setItem('mydayapp-angular', '');
      console.log('creacion de almacenamiento');
    }
  }
}
