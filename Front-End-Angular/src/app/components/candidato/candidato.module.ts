import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CriarCandidatoComponent } from './candidato-crud/criar-candidato/criar-candidato.component';
import { BrowserModule } from '@angular/platform-browser';
import { FiltroComponent } from './candidato-crud/filtro/filtro.component';


@NgModule({
  declarations: [
    CriarCandidatoComponent,
    FiltroComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltroComponent,
  ]

})
export class CandidatoModule { }
