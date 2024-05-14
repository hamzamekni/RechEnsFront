import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseUrl = 'http://localhost:8081/villes';

  constructor(private http:HttpClient) { }
  getVillesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getVilleById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createVille(ville: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, ville);
  }
  updateVille(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteVille(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
