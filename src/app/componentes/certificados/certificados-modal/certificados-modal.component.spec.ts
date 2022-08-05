import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosModalComponent } from './certificados-modal.component';

describe('CertificadosModalComponent', () => {
  let component: CertificadosModalComponent;
  let fixture: ComponentFixture<CertificadosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
