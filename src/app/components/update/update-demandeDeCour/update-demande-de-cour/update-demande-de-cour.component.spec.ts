import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandeDeCourComponent } from './update-demande-de-cour.component';

describe('UpdateDemandeDeCourComponent', () => {
  let component: UpdateDemandeDeCourComponent;
  let fixture: ComponentFixture<UpdateDemandeDeCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDemandeDeCourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDemandeDeCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
