import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeCourComponent } from './demande-de-cour.component';

describe('DemandeDeCourComponent', () => {
  let component: DemandeDeCourComponent;
  let fixture: ComponentFixture<DemandeDeCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeDeCourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeDeCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
