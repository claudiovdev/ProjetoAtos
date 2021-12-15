import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRecrutadorComponent } from './criar-recrutador.component';

describe('CriarRecrutadorComponent', () => {
  let component: CriarRecrutadorComponent;
  let fixture: ComponentFixture<CriarRecrutadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarRecrutadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarRecrutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
