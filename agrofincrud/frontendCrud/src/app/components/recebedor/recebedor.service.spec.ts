import { TestBed } from '@angular/core/testing';

import { RecebedorService } from './recebedor.service';

describe('RecebedorService', () => {
  let service: RecebedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecebedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
