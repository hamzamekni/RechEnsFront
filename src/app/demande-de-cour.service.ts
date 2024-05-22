import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeDeCourService {

  private baseUrl = 'http://localhost:8081/demandeDeCours';

  constructor(private http: HttpClient) { }
  getDemandeDeCours(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createDemandeDeCours(demandeDeCours: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,demandeDeCours)
  }
  updateDemandeDeCours(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteDemandeDeCours(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getDemandeDeCoursList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
  demandeForm(demandeDeCourData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/demandeForm', demandeDeCourData);
  }
}
