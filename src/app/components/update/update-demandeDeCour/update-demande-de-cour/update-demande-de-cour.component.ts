import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdressService } from 'src/app/adress.service';
import { DemandeDeCourService } from 'src/app/demande-de-cour.service';
import { EtudiantService } from 'src/app/etudiant.service';
import { MatiereService } from 'src/app/matiere.service';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-update-demande-de-cour',
  templateUrl: './update-demande-de-cour.component.html',
  styleUrls: ['./update-demande-de-cour.component.scss']
})
export class UpdateDemandeDeCourComponent implements OnInit, OnDestroy {
  updateDemandeDeCourForm: FormGroup;
  demandeDeCourId: number;
  adressIds: number[] = [];
  etudiantIds: number[] = [];
  teacherIds: number[] = [];
  matiereIds: number[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private demandeDeCourService: DemandeDeCourService,
    private route: ActivatedRoute,
    private router: Router,
    private adressService: AdressService,
    private matiereService: MatiereService,
    private teacherService: TeacherService,
    private etudiantService: EtudiantService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAdressIds();
    this.getEtudiantIds();
    this.getTeacherIds();
    this.getMatiereIds();
    this.route.paramMap.subscribe(params => {
      this.demandeDeCourId = +params.get('id');
      if (this.demandeDeCourId) {
        this.getDemandeDeCour();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initForm(): void {
    this.updateDemandeDeCourForm = this.fb.group({
      titre_demande: ['', Validators.required],
      detail_demande: ['', Validators.required],
      locale: ['', Validators.required],
      prix_max: [0, Validators.required],
      prix_min: [0, Validators.required],
      statutDemande: ['', Validators.required],
      adress: this.fb.group({
        adress_Id: ['', Validators.required]
      }), 
      matiere: this.fb.group({
        matiere_Id: ['', Validators.required]
      }), 
      etudiant: this.fb.group({
        etudiant_Id: ['', Validators.required]
      }), 
      teacher:  this.fb.group({
        teacherId: ['', Validators.required]
      })  
    });
  }

  private getAdressIds(): void {
    this.adressService.getAdressList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (addresses: any[]) => {
          this.adressIds = addresses.map(address => address.adress_Id);
        },
        (error) => {
          console.error('Error fetching addresses:', error);
          // Provide user feedback
        }
      );
  }

  private getMatiereIds(): void {
    this.matiereService.getMatiereList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (matieres: any[]) => {
          this.matiereIds = matieres.map(matiere => matiere.matiere_Id);
        },
        (error) => {
          console.error('Error fetching matieres:', error);
          // Provide user feedback
        }
      );
  }

  private getTeacherIds(): void {
    this.teacherService.getTeacherList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (teachers: any[]) => {
          this.teacherIds = teachers.map(teacher => teacher.teacherId);
        },
        (error) => {
          console.error('Error fetching teachers:', error);
          // Provide user feedback
        }
      );
  }

  private getEtudiantIds(): void {
    this.etudiantService.getEtudiantList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (etudiants: any[]) => {
          this.etudiantIds = etudiants.map(etudiant => etudiant.etudiant_Id);
        },
        (error) => {
          console.error('Error fetching etudiants:', error);
          // Provide user feedback
        }
      );
  }

  private getDemandeDeCour(): void {
    this.demandeDeCourService.getDemandeDeCours(this.demandeDeCourId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (demandeDeCour: any) => {
          this.updateDemandeDeCourForm.patchValue(demandeDeCour);
        },
        (error) => {
          console.error('Error fetching demande de cour:', error);
          // Provide user feedback
        }
      );
  }

  onSubmit(): void {
    if (this.updateDemandeDeCourForm.valid) {
      const updatedDemandeDeCour: any = this.updateDemandeDeCourForm.getRawValue();
      this.demandeDeCourService.updateDemandeDeCours(this.demandeDeCourId, updatedDemandeDeCour)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          response => {
            console.log('Demande de cour updated:', response);
          },
          error => {
            console.error('Error updating demande de cour:', error);
            // Provide user feedback
          }
        );
    }
  }
}
