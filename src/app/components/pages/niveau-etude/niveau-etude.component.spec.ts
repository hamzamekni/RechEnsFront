import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEtudeComponent } from './niveau-etude.component';

describe('NiveauEtudeComponent', () => {
  let component: NiveauEtudeComponent;
  let fixture: ComponentFixture<NiveauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveauEtudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
