import { TestBed } from '@angular/core/testing';

import { IconosService } from './iconos.service';

describe('IconosService', () => {
  let service: IconosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
