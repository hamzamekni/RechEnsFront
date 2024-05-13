import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/auth', { email, password });
  }
  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/Register', userData);
  }
  registerTeacher(userData: any ): Observable<any> {
    
    return this.http.post<any>(this.baseUrl+'/RegisterTeacher', userData);
  }
  isLoggedIn(): boolean {
    // check if authentication token exists
    return !!localStorage.getItem('token');
  }
}
