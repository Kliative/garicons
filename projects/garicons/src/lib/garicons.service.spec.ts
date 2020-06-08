import { TestBed } from '@angular/core/testing';

import { GariconsService } from './garicons.service';

describe('GariconsService', () => {
  let service: GariconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GariconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
