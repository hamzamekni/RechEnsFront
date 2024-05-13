import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth-service.service';
import { UploadService } from 'src/app/upload.service';

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
    detailEnseigant: '',
    uploadedUrls: []
  };
  files:File[] = []
  tab: string[] = [];

  constructor(private authService: AuthService, private upload : UploadService) {}

  onSelect(event: any){
    console.log(event)
    this.files.push(...event.addedFiles)
  }
  onRemove(event: any) {
    // Remove the file from the files array
    const index = this.files.indexOf(event);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }
  uploadFiles() {
    this.tab= []
    if (!this.files || this.files.length === 0) {
      alert("No File Selected");
      return;
    }
  
    for (let i = 0; i < this.files.length; i++) {
      const file_data = this.files[i];
      const data = new FormData();
      data.append('file', file_data);  
      data.append('upload_preset', 'new-insta');
      data.append('cloud_name', 'rechens');
      
      // Upload the file
      this.upload.uploadImage(data).subscribe((res) => {
        // Store the URL in the tab array
        this.tab[i] = res.secure_url;
        
        // Remove the uploaded file from the files array
        this.onRemove(file_data);

        
        // If you want to log all URLs after all files are uploaded, move this code outside the loop
        if (i === this.files.length - 1) {
          this.logUrls();
        }
      });
    }
  }
  
  logUrls() {
    for(let i = 0; i < this.tab.length; i++) {
      console.log(this.tab[i]);
    }
  }
  
  registerTeacher(): void {
    for(let i = 0; i < this.tab.length; i++) {
      this.userData.uploadedUrls[i]= this.tab[i];
    }
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