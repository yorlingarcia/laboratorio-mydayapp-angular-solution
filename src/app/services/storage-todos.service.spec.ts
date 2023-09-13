import { TestBed } from '@angular/core/testing';

import { StorageTodosService } from './storage-todos.service';

describe('StorageTodosService', () => {
  let service: StorageTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
