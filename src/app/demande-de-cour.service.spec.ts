import { TestBed } from '@angular/core/testing';

import { DemandeDeCourService } from './demande-de-cour.service';

describe('DemandeDeCourService', () => {
  let service: DemandeDeCourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDeCourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
