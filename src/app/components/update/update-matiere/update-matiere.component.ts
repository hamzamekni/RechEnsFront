import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from 'src/app/matiere.service';
import { Matiere } from 'src/app/model/Matiere';
import { NiveauEtude } from 'src/app/model/NiveauEtude';
import { Teacher } from 'src/app/model/Teacher';
import { NiveauEtudeService } from 'src/app/niveau-etude.service';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-update-matiere',
  templateUrl: './update-matiere.component.html',
  styleUrls: ['./update-matiere.component.scss']
})
export class UpdateMatiereComponent implements OnInit {
  updateMatiereForm: FormGroup;
  niveauEtudeIds: number[] = []; // Array to hold niveauEtude IDs
  teacherIds: number[] = []; // Array to hold teacher IDs

  constructor(
    private fb: FormBuilder,
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private router: Router,
    private niveauEtudeService: NiveauEtudeService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getNiveauEtudeIds(); // Fetch niveauEtude IDs when component initializes
    this.getTeacherIds(); // Fetch teacher IDs when component initializes

    this.route.paramMap.subscribe(params => {
      const matiereId = +params.get('id');
      if (matiereId) {
        this.getMatiere(matiereId);
      }
    });
  }

  private initForm(): void {
    this.updateMatiereForm = this.fb.group({
      matiere_Id: [{ value: '', disabled: true }, Validators.required],
      code_etude: ['', Validators.required],
      matiere_name: ['', Validators.required],
      niveauEtude: this.fb.group({
        niveauEtude_Id: ['', Validators.required]
      }),
      teacher: this.fb.group({
        teacherId: ['', Validators.required]
      })
      // Add more fields as necessary
    });
  }

  private getMatiere(id: number): void {
    this.matiereService.getMatiere(id).subscribe(
      (matiere: Matiere) => {
        this.updateMatiereForm.patchValue(matiere);
      },
      (error) => {
        console.error('Error fetching matiere:', error);
      }
    );
  }

  private getNiveauEtudeIds(): void {
    // Assuming you have a method in MatiereService to fetch niveauEtudeIds
    this.niveauEtudeService.getNiveauEtudesList().subscribe(
      (ids: NiveauEtude[]) => {
        this.niveauEtudeIds = ids.map(niveauEtudeId => niveauEtudeId.niveauEtude_Id);
      },
      (error) => {
        console.error('Error fetching niveauEtudeIds:', error);
      }
    );
  }



  private getTeacherIds(): void {
    // Assuming you have a method in MatiereService to fetch teacherIds
    this.teacherService.getTeacherList().subscribe(
      (ids: Teacher[]) => {
        this.teacherIds = ids.map(teacherId => teacherId.teacherId);
      },
      (error) => {
        console.error('Error fetching teacherIds:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.updateMatiereForm.valid) {
      const updatedMatiere: Matiere = this.updateMatiereForm.getRawValue();
      this.matiereService.updateMatiere(updatedMatiere.matiereId, updatedMatiere).subscribe(
        response => {
          // Handle successful update
          console.log('Matiere updated:', response);
        },
        error => {
          // Handle error
          console.error('Error updating matiere:', error);
        }
      );
    }
  }
}
