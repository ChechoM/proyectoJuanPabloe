import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposModalComponent } from './equipos-modal.component';

describe('EquiposModalComponent', () => {
  let component: EquiposModalComponent;
  let fixture: ComponentFixture<EquiposModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
