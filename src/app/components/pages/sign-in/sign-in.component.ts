import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // Handle successful login response
          // Redirect to the home page
          window.location.href = '/app-seo-agency';
        },
        error => {
          // Handle error response
        }
      );
  }
  
  ngOnInit(): void {
  }

}
