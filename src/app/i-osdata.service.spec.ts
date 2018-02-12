import { TestBed, inject } from '@angular/core/testing';

import { IOsdataService } from './i-osdata.service';

describe('IOsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IOsdataService]
    });
  });

  it('should be created', inject([IOsdataService], (service: IOsdataService) => {
    expect(service).toBeTruthy();
  }));
});
