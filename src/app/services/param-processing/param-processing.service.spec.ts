import { TestBed } from '@angular/core/testing';

import { ParamProcessingService } from './param-processing.service';

describe('ParamProcessingService', () => {
  let service: ParamProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
