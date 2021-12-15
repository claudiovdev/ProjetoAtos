import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './components/view/candidato/candidato.component';
import { CandidatoModule } from './components/candidato/candidato.module';
import { RecrutadorComponent } from './components/view/recrutador/recrutador.component';
import { RecrutadorModule } from './components/recrutador/recrutador.module';





@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CandidatoComponent,
    RecrutadorComponent


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    CandidatoModule,
    RecrutadorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
