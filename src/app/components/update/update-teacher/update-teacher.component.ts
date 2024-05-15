import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/model/Teacher';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent implements OnInit {
  updateTeacherForm: FormGroup;
  teacherId: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private router: Router
  ) {
    this.updateTeacherForm = this.formBuilder.group({
      teacherId: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      montant_non_paye: [0], // Assuming it's a numeric field
      statut_etude_presentiel: [''], // Assuming it's a string field
      detailEtudePresentiel: [''], // Assuming it's a string field
      detailEnseigant: [''], // Assuming it's a string field
      password: ['', Validators.required],
      phoneNumber: [''], // Assuming it's a numeric field
      role: [''], // Assuming it's a string field
      // Add more form controls as necessary
    });
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.teacherId = +params.get('id'); // Assuming the route parameter is 'id'
      // Fetch the teacher data by ID and populate the form
      this.teacherService.getTeacher(this.teacherId).subscribe(
        (teacher: Teacher) => {
          this.updateTeacherForm.patchValue({
            teacherId: teacher.teacherId,
            firstName: teacher.firstName,
            email: teacher.email,
            montant_non_paye: teacher.montant_non_paye,
            statut_etude_presentiel: teacher.statut_etude_presentiel,
            detailEtudePresentiel: teacher.detailEtudePresentiel,
            detailEnseigant: teacher.detailEnseigant,
            phoneNumber: teacher.phoneNumber,
            role: teacher.role,
            password: teacher.password
            // Patch more form controls as necessary
          });
        },
        (error: any) => {
          console.error('Error fetching teacher data:', error);
          // Optionally, handle the error
        }
      );
    });
  }

  onSubmit(): void {
    if (this.updateTeacherForm.valid) {
      const updatedTeacher: Teacher = this.updateTeacherForm.value;
      this.teacherService.updateTeacher(this.teacherId, updatedTeacher).subscribe(
        (response: any) => {
          // Handle success response
          console.log('Teacher updated successfully:', response);
          this.router.navigate(['/app-teacher']);
        },
        (error: any) => {
          console.error('Error updating teacher:', error);
          // Optionally, handle the error
        }
      );
    }
  }

}
