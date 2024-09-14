import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyensGenerauxComponent } from './moyens-generaux.component';

describe('MoyensGenerauxComponent', () => {
  let component: MoyensGenerauxComponent;
  let fixture: ComponentFixture<MoyensGenerauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoyensGenerauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoyensGenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
