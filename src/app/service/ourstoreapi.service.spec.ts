import { TestBed } from '@angular/core/testing';

import { OurstoreapiService } from './ourstoreapi.service';

describe('OurstoreapiService', () => {
  let service: OurstoreapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurstoreapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
