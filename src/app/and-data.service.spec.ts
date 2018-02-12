import { TestBed, inject } from '@angular/core/testing';

import { AndDataService } from './and-data.service';

describe('AndDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AndDataService]
    });
  });

  it('should be created', inject([AndDataService], (service: AndDataService) => {
    expect(service).toBeTruthy();
  }));
});
