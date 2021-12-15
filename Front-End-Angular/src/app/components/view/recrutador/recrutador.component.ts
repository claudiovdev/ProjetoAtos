import { RecrutadorService } from 'src/app/components/recrutador/recrutador.service';
import { Component, OnInit } from '@angular/core';
import { Recrutador } from 'src/app/shared/models/recrutador';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recrutador',
  templateUrl: './recrutador.component.html',
  styleUrls: ['./recrutador.component.css']
})
export class RecrutadorComponent implements OnInit {

  public recrutadores: Recrutador[] = [];
  constructor(private router: Router, private recrutadorService: RecrutadorService) { }

  ngOnInit(): void {
    this.mostrarRecrutadores();
  }

  navegarParaCriacao(): void{
    this.router.navigate(['/recrutadores/criar'])
  }

  mostrarRecrutadores(){
    this.recrutadorService.listarRecrutadores().subscribe(recrutadores => {
      this.recrutadores = recrutadores;
    })
  }

  deletarCandidato(recrutador: Recrutador){
    this.recrutadorService.deletar(recrutador.id).subscribe({
      next: success => {
        console.log("Deletado com sucesso");
        this.mostrarRecrutadores();
      },
      error: error => console.log(error)
    });
  }

  atualizarRecrutador(recrutador: Recrutador): void {
    this.router.navigate(["/recrutadores/criar", recrutador.id]);
  }
}
