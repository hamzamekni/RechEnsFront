import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth-service.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  loggedInUser: any;
  updateUserForm: FormGroup

  constructor(private authService: AuthService,private cookieService: CookieService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getUser();
    // Retrieve logged-in user information
    this.initForm();
    

  }

  private initForm(): void {
    const token = this.cookieService.get('token');
    const decodedToken = this.decodeToken(token);
    this.updateUserForm = this.fb.group({
      userId: [{ value: '', disabled: true }, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      profileImage: ['', Validators.required],
      phoneNumber: ['', Validators.required]
      // Add more fields as necessary
    });
  }

  private getUser(): void {
    const token = this.cookieService.get('token');
    const decodedToken = this.decodeToken(token);
    console.log(decodedToken)
    this.userService.getUser(decodedToken.sub).subscribe(
      (user: User) => {
        this.updateUserForm.patchValue(user);
      },
      (error) => {
        console.error('Error fetching user:', error);
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

  onSubmit(): void {
    
    
      const updatedUser: User = this.updateUserForm.getRawValue();
      this.userService.updateUser(updatedUser.userId, updatedUser).subscribe(response => {
        // Handle successful update
        console.log('Address updated:', response);
        this.router.navigate(['/']);
      }, error => {
        // Handle error
        console.error('Error updating address:', error);
      });
  
  }

}
