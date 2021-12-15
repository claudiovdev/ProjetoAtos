import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecrutadorService } from 'src/app/components/recrutador/recrutador.service';
import { Recrutador } from 'src/app/shared/models/recrutador';
import { CandidatoService } from '../../candidato.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent implements OnInit {
  recrutadores: Recrutador[] = [];
  @Output() pesquisarRecrutadores = new EventEmitter();
  idRecrutador : number;

  formulario: FormGroup;
  constructor(private recrutadorService: RecrutadorService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listarRecrutadores();
    this.formulario = this.fb.group({
      recrutador: [null]
    })
  }

  listarRecrutadores(): void {
    this.recrutadorService.listarRecrutadores().subscribe({
      next: (recruter) => {
        this.recrutadores = recruter;
      },
      error: (error) => console.log(error),
    });
  }

  compararObjeto(obj1: any, obj2: any) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 && obj2;
  }

  ngOnChange(e : any){
   this.idRecrutador = e.id;
  }

  pesquisarRecrutador(){
    this.pesquisarRecrutadores.emit(this.idRecrutador);
  }


}
