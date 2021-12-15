import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-atos';

  constructor(private router: Router) { }


  navegarParaCandidatos(): void{
    this.router.navigate(['/candidatos'])
  }

  navegarParaRecrutador(): void{
    this.router.navigate(['/recrutadores'])
  }
}
