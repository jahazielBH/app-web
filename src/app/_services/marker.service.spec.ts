import { TestBed } from '@angular/core/testing';

import { MarkerService } from './marker.service';

describe('MarkerService', () => {
  let service: MarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerService);
  });

});
