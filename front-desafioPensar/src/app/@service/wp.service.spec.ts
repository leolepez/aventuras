import { TestBed } from '@angular/core/testing';

import { WpService } from './wp.service';

describe('WpService', () => {
  let service: WpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
