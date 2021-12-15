import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCandidatoComponent } from './criar-candidato.component';

describe('CriarCandidatoComponent', () => {
  let component: CriarCandidatoComponent;
  let fixture: ComponentFixture<CriarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
