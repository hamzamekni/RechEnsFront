import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private baseUrl = 'http://localhost:8081/recommendations';

  constructor(private http: HttpClient) { }
  getRecommendations(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createRecommendation(recommendation: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,recommendation)
  }
  updateRecommendation(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteRecommendation(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getRecommendationList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
