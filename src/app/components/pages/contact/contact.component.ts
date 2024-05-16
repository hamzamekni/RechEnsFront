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
  registerTeacher(): void {
    for(let i = 0; i < this.tab.length; i++) {
      this.userData.uploadedUrls[i]= this.tab[i];
    }
    var x =this.userData.phoneNumber
    if(this.userData.uploadedUrls.length===0){
      alert("You Should Insert All Your Files Before Submitting")
    }
    else if(this.userData.firstName===''){
      alert("Please enter your first name");
    }
    else if(this.userData.email===''){
      alert("Please enter your email");
    }
    else if(x.length<8){
      alert("Please enter a valid phone number");
    }
    else if(this.userData.montantNonPaye===''){
      alert("Please enter your montant Non Paye");
    }
    
    else if(this.userData.password===''){
      alert("Please enter your password");
    }
    else if(this.userData.detailEtudePresentiel===''){
      alert("Please enter your detail Etude Presentiel");
    }
    else if(this.userData.detailEnseigant===''){
      alert("Please enter your detail Enseigant");
    }
    
    else{
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
        alert("all files are uploaded")
      });
    }
  }
  
  logUrls() {
    for(let i = 0; i < this.tab.length; i++) {
      console.log(this.tab[i]);
    }
  }
  
 

}