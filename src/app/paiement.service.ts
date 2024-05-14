import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private baseUrl = 'http://localhost:8081/paiements';

  constructor(private http: HttpClient) { }
  getPaiement(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createPaiement(paiement: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,paiement)
  }
  updatePaiement(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deletePaiement(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getPaiementsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
  
}
