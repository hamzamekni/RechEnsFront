import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // Handle successful login response
          // Store the token in a cookie
          this.cookieService.set('token', response.token);
          
          // Check if the role in the token is ROLE_TEACHER
          const token = response.token;
          const decodedToken = this.decodeToken(token);
          if (decodedToken && decodedToken.role === 'ROLE_TEACHER') {
            // Redirect to the teacher page
            window.location.href = '/app-teacher';
          } else if (decodedToken && decodedToken.role === 'ROLE_ADMIN'){
            // Redirect to the default page
            window.location.href = '/app-teacher';
          }
          else{
            window.location.href = '/team';
          }
        },
        error => {
          // Handle error response
        }
      );
  }

  decodeToken(token: string): any {
    try {
      const tokenPayload = token.split('.')[1];
      const decodedToken = JSON.parse(atob(tokenPayload));
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  ngOnInit(): void {
  }

}