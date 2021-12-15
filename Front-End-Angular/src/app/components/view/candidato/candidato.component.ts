import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/shared/models/candidato';
import { Recrutador } from 'src/app/shared/models/recrutador';
import { CandidatoService } from '../../candidato/candidato.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  public candidatos : Candidato[] = [];
  id?: number;



  constructor(private router: Router, private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.mostrarCandidatos();
  }

  mostrarCandidatos(){
    this.candidatoService.listarCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
    })
  }
  navegarParaCriacao(): void{
    this.router.navigate(['/candidatos/criar'])
  }

  deletarCandidato(candidato: Candidato){
    this.candidatoService.deletar(candidato.id).subscribe({
      next: success => {
        console.log("Deletado com sucesso");
        this.mostrarCandidatos();
      },
      error: error => console.log(error)
    });
  }

  atualizarCandidato(candidato: Candidato): void {
    this.router.navigate(["/candidatos/criar", candidato.id]);
  }

  teste(e : any){
    this.candidatoService.listarCandidatos().subscribe({
      next : candidat => this.candidatos = candidat.filter((candidat)=> candidat.recrutador.id == e),
      error : err => console.log(err)
    })
  }

  limpar(){
    this.mostrarCandidatos();
  }
}
