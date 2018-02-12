import { TestBed, inject } from '@angular/core/testing';

import { HybdataService } from './hybdata.service';

describe('HybdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HybdataService]
    });
  });

  it('should be created', inject([HybdataService], (service: HybdataService) => {
    expect(service).toBeTruthy();
  }));
});
