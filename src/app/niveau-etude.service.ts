import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  private baseUrl = 'http://localhost:8081/niveauEtudes';

  constructor(private http: HttpClient) { }
  getNiveauEtude(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createNiveauEtude(niveauEtude: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,niveauEtude)
  }
  updateNiveauEtude(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteNiveauEtude(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getNiveauEtudesList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
