import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportCourService {

  private baseUrl = 'http://localhost:8081/support-cours';

  constructor(private http: HttpClient) { }
  getSupportCoursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getSupportCours(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createSupportCour(supportCour: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, supportCour);
  }
  updateSupportCour(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteSupportCour(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

}
