import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userData: any = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthday: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  signUp(): void {
    this.authService.signUp(this.userData)
      .subscribe(
        response => {
          // Handle successful sign up response
          window.location.href = '/app-seo-agency';
        },
        error => {
          // Handle sign up error
          console.error('Sign up failed:', error);
          // Optionally, display an error message to the user
        }
      );
  }

  ngOnInit(): void {
  }

}
