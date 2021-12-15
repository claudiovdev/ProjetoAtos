import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recrutador } from 'src/app/shared/models/recrutador';

@Injectable({
  providedIn: 'root'
})
export class RecrutadorService {

  public  baseUrl = 'http://localhost:8080';
  public baseUrl2 = 'http://localhost:8080/api/recrutador'

  constructor(private http: HttpClient) { }

  listarRecrutadores(): Observable<Recrutador[]>{
    return this.http.get<Recrutador[]>(`${this.baseUrl}/api/recrutadores`)
  }

  deletar(id: any): Observable<Recrutador> {
    return this.http.delete<Recrutador>(`${this.baseUrl}/api/recrutador/${id}`);

  }

  criar(recrutador: Recrutador): Observable<Recrutador> {
    return this.http.post<Recrutador>(this.baseUrl2, recrutador);
  }

  buscarRecrutador(id: any): Observable<Recrutador>{
    return this.http.get<Recrutador>((`${this.baseUrl}/api/recrutador/${id}`));
  }

  atualizar(recrutador: Recrutador): Observable<Recrutador> {
    return this.http.put<Recrutador>(`${this.baseUrl}/api/recrutador/${recrutador.id}`, recrutador);
  }
}
