import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8081/config';

  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<any>  {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getUserByEmail(email: String): Observable<any>  {
    return this.http.get(`${this.baseUrl}/${email}`)
  }
  createUser(user: Object): Observable<any>  {
    return this.http.post(`${this.baseUrl}`, user);
  }
  updateUser(id: number, value: any): Observable<any>  {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteUser(id: number): Observable<any>  {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getUserList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`+'/getAllUsers');
  }
}
