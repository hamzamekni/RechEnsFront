import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/auth', { email, password });
  }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/Register', userData);
  }

  registerTeacher(userData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/RegisterTeacher', userData);
  }

  isLoggedIn(): boolean {
    // Check if authentication token exists in cookies
    return this.cookieService.check('token');
  }
}
