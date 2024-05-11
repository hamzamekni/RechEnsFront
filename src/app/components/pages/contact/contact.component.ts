import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userData = {
    firstName: '',
    email: '',
    phoneNumber: '',
    montantNonPaye: '',
    password: '',
    detailEtudePresentiel: '',
    detailEnseigant: ''
  };

  constructor(private authService: AuthService) {}

  registerTeacher(): void {
    this.authService.registerTeacher(this.userData)
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

}