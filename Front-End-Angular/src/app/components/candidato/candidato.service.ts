import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Candidato } from 'src/app/shared/models/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  public readonly baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

listarCandidatos(): Observable<Candidato[]>{
  return this.http.get<Candidato[]>(`${this.baseUrl}/api/candidatos`)
}

criar(candidato: Candidato): Observable<Candidato> {
  return this.http.post<Candidato>(`${this.baseUrl}/api/candidato`, candidato);
}

deletar(id: any): Observable<Candidato> {
  return this.http.delete<Candidato>(`${this.baseUrl}/api/candidato/${id}`);

}

atualizar(candidato: Candidato): Observable<Candidato> {
  return this.http.put<Candidato>(`${this.baseUrl}/api/candidato/${candidato.id}`, candidato);
}

buscarCandidato(id: any): Observable<Candidato>{
  return this.http.get<Candidato>((`${this.baseUrl}/api/candidato/${id}`));
}

}
