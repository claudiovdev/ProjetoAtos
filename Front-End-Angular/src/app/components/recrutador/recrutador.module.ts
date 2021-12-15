import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CriarRecrutadorComponent } from './recrutador-crud/criar-recrutador/criar-recrutador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CriarRecrutadorComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class RecrutadorModule { }
