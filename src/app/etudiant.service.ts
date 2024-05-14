import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:8081/etudiants';

  constructor(private http: HttpClient) { }
  getEtudiant(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createEtudiant(etudiants: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,etudiants)
  }
  updateEtudiant(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteEtudiant(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getEtudiantList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
 
}
