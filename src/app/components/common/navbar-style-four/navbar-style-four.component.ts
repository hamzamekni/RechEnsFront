import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-navbar-style-four',
  templateUrl: './navbar-style-four.component.html',
  styleUrls: ['./navbar-style-four.component.scss']
})
export class NavbarStyleFourComponent implements OnInit {
  isLoggedIn: boolean = false; // Example property for indicating whether the user is logged in
  etudiant: boolean = false;
  teacher: boolean = false; 
  admin: boolean = false; 
 

  constructor(private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
    // Check if there's a token in the cookies to determine if the user is logged in
    const token = this.cookieService.get('token');
    const decodedToken = this.decodeToken(token);
    if (decodedToken && decodedToken.role === 'ROLE_TEACHER') {
      this.teacher = true;
    }else if (decodedToken && decodedToken.role === 'ROLE_ETUDIANT') {
      this.etudiant = true;
    }else{
      this.admin = true;
    }
    this.isLoggedIn = !!token; // Convert token to boolean
  }

  

  
  toggleMenu(): void {
    // Method to toggle the visibility of the menu
    // Implement your logic here
  }

  async logout():  Promise<void> {
    // Method to handle user logout
    // Clear the token from cookies
    await this.cookieService.delete('token');
    // Update isLoggedIn property
    this.isLoggedIn = false;
    this.router.navigate(['/sign-in'])
    alert("logged out")
    // Implement any other logout logic here
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

  
}