import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCourComponent } from './support-cour.component';

describe('SupportCourComponent', () => {
  let component: SupportCourComponent;
  let fixture: ComponentFixture<SupportCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportCourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
