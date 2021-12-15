import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Recrutador } from 'src/app/shared/models/recrutador';
import { RecrutadorService } from '../../recrutador.service';

@Component({
  selector: 'app-criar-recrutador',
  templateUrl: './criar-recrutador.component.html',
  styleUrls: ['./criar-recrutador.component.css']
})
export class CriarRecrutadorComponent implements OnInit {

  public recrutadorForm: FormGroup;
  id: number;



  constructor(private router: Router,
    private fb: FormBuilder,
    private recrutadorService: RecrutadorService,
    private activ: ActivatedRoute) { }

  ngOnInit(): void {


    this.id = this.activ.snapshot.params["id"];

    if(this.id){
      this.formularioVazio();
      this.recrutadorService.buscarRecrutador(this.id).subscribe({
        next: recrutador => {
          this.formularioCompleto(recrutador);
        }
      })
    }else{
      this.formularioVazio();
    }

  }

  formularioCompleto(recrutador: Recrutador){
    this.recrutadorForm = this.fb.group({
      id: [recrutador.id],
      nome: [recrutador.nome],
      sobrenome: [recrutador.sobrenome],
      email: [recrutador.email]

      })
  }

  formularioVazio(){
    this.recrutadorForm = this.fb.group({
      id: [null],
      nome: [null],
      sobrenome: [null],
      email: [null]
      })
  }

  criarRecrutador(){
    this.recrutadorService.criar(this.recrutadorForm.value).subscribe( ()=>{
     this.router.navigate(['/recrutadores'])
    })
  }
}
