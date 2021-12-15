import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecrutadorService } from 'src/app/components/recrutador/recrutador.service';
import { Candidato } from 'src/app/shared/models/candidato';
import { Recrutador } from 'src/app/shared/models/recrutador';
import { CandidatoService } from '../../candidato.service';


@Component({
  selector: 'app-criar-candidato',
  templateUrl: './criar-candidato.component.html',
  styleUrls: ['./criar-candidato.component.css']
})
export class CriarCandidatoComponent implements OnInit {

cadastroForm: FormGroup;
recrutadores: Recrutador[] = [];
id: number;
  constructor(private candidatoService: CandidatoService,
      private router: Router,
      private fb: FormBuilder,
      private recrutadorService: RecrutadorService,
      private activ: ActivatedRoute
       ) { }


  ngOnInit(): void {

    this.id = this.activ.snapshot.params["id"];

    if(this.id){
      this.formularioVazio();
      this.candidatoService.buscarCandidato(this.id).subscribe({
        next: candidato => {
          this.formularioCompleto(candidato);
        }
      })
    }else{
      this.formularioVazio();
    }
    this.mostrarRecrutadores();



  }

  formularioCompleto(candidato: Candidato){
    this.cadastroForm = this.fb.group({
      id: [candidato.id],
      nome: [candidato.nome],
      sobreNome: [candidato.sobreNome],
      email: [candidato.email],
      recrutador: [candidato.recrutador]
      })
  }

  formularioVazio(){
    this.cadastroForm = this.fb.group({
      id: [null],
      nome: [null],
      sobreNome: [null],
      email: [null],
      recrutador: [null]
      })
  }

mostrarRecrutadores(): void {
  this.recrutadorService.listarRecrutadores().subscribe({
    next: recruter =>{ this.recrutadores = recruter;},
    error: error => console.log(error)
  })
}


  criarCandidato(){
    this.candidatoService.criar(this.cadastroForm.value).subscribe( ()=>{
     this.router.navigate(['/candidatos'])
    })
  }

  compararObjeto(obj1: any, obj2: any) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 && obj2;
  }

}
