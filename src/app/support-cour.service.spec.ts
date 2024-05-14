import { TestBed } from '@angular/core/testing';

import { SupportCourService } from './support-cour.service';

describe('SupportCourService', () => {
  let service: SupportCourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportCourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
