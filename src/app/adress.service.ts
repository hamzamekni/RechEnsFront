import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private baseUrl = 'http://localhost:8081/adresses';

  constructor(private http: HttpClient) { }
  getAdress(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createAdress(adress: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,adress)
  }
  updateAdress(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
    return
  }
  deleteAdress(id: number): Observable<any>{
    this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    return
  }
  getAdressList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
