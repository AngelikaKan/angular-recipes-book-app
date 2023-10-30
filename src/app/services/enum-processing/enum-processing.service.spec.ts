import { TestBed } from '@angular/core/testing';

import { EnumProcessingService } from './enum-processing.service';

describe('EnumProcessingService', () => {
  let service: EnumProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
