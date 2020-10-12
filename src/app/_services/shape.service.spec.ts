import { TestBed } from '@angular/core/testing';

import { ShapeService } from './shape.service';

describe('ShapeService', () => {
  let service: ShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeService);
  });

});
