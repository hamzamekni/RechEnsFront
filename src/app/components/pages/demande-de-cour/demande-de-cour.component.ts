import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { DemandeDeCourService } from 'src/app/demande-de-cour.service';
import { EtudiantService } from 'src/app/etudiant.service';
import { MatiereService } from 'src/app/matiere.service';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-demande-de-cour',
  templateUrl: './demande-de-cour.component.html',
  styleUrl: './demande-de-cour.component.scss'
})
export class DemandeDeCourComponent {
  etudiantIds: number[] = [];
  teacherIds: number[] = [];
  matiereIds: number[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();

  demandeDeCourData: any = {
    titre_demande: '',
    detail_demande: '',
    statut_demande: "IN_PROGRESS",
    locale: '',
    prix_max: 0,
    prix_min: 0,
    matiereId: '',
    etudiantId: '',
    teacherId: ''
  };
  constructor(private demadeDeCourService: DemandeDeCourService,
    private matiereService: MatiereService,
    private teacherService: TeacherService,
    private etudiantService: EtudiantService) { }
    ngOnInit(): void {
      this.getEtudiantIds();
      this.getTeacherIds();
      this.getMatiereIds();
    }
  demandeForm(): void {
    console.log(this.demandeDeCourData)
    
        this.demadeDeCourService.demandeForm(this.demandeDeCourData)
        .subscribe(
          response => {
            // Handle successful sign up response
            window.location.href = '/';
          },
          error => {
            // Handle sign up error
            console.error('Failed To Pass The Demand:', error);
            // Optionally, display an error message to the user
            alert("Credentials Must Be Valid")
          }
        );
     
    
  }



  private getMatiereIds(): void {
    this.matiereService.getMatiereList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (matieres: any[]) => {
          this.matiereIds = matieres.map(matiere => matiere.matiereId);
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
          this.etudiantIds = etudiants.map(etudiant => etudiant.etudiantId);
        },
        (error) => {
          console.error('Error fetching etudiants:', error);
          // Provide user feedback
        }
      );
  }
}
