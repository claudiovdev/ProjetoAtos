import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CandidatoComponent } from './components/view/candidato/candidato.component';
import { CriarCandidatoComponent } from './components/candidato/candidato-crud/criar-candidato/criar-candidato.component';
import { RecrutadorComponent } from './components/view/recrutador/recrutador.component';
import { CriarRecrutadorComponent } from './components/recrutador/recrutador-crud/criar-recrutador/criar-recrutador.component';






const routes: Routes = [
  { path: '', component:  CadastroComponent},
  { path: 'candidatos', component: CandidatoComponent},
  { path: 'candidatos/criar', component: CriarCandidatoComponent},
  { path: 'candidatos/criar/:id', component: CriarCandidatoComponent},
  {path: 'recrutadores', component: RecrutadorComponent},
  { path: 'recrutadores/criar', component: CriarRecrutadorComponent},
  { path: 'recrutadores/criar/:id', component: CriarRecrutadorComponent}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
