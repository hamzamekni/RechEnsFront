import { Component, OnInit } from '@angular/core';
import { DemandeDeCourService } from 'src/app/demande-de-cour.service';
import { DemandeDeCour } from 'src/app/model/DemandeDeCour';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  demandesDeCours: DemandeDeCour[] = [];
  filteredDemandesDeCours: DemandeDeCour[] = [];

  constructor(private demandesDeCourService: DemandeDeCourService) { }

  ngOnInit(): void {
    this.fetchDemandesDeCours();
  }

  fetchDemandesDeCours(): void {
    this.demandesDeCourService.getDemandeDeCoursList()
      .subscribe((demandesDeCours: DemandeDeCour[]) => {
        this.demandesDeCours = demandesDeCours;
        this.filteredDemandesDeCours = demandesDeCours;
      });
  }

  deleteDemandeDeCour(demandeDeCourId: number): void {
    this.demandesDeCourService.deleteDemandeDeCours(demandeDeCourId)
      .subscribe(() => {
        this.demandesDeCours = this.demandesDeCours.filter(demandeDeCour => demandeDeCour.demandeDeCour_Id !== demandeDeCourId);
        this.filteredDemandesDeCours = this.filteredDemandesDeCours.filter(demandeDeCour => demandeDeCour.demandeDeCour_Id !== demandeDeCourId);
      });
  }

  searchDemandesDeCours(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredDemandesDeCours = this.demandesDeCours.filter(demandeDeCour => 
      demandeDeCour.titre_demande.toUpperCase().includes(input) ||
      demandeDeCour.detail_demande.toUpperCase().includes(input) ||
      demandeDeCour.locale.toUpperCase().includes(input) ||
      demandeDeCour.statutDemande.toUpperCase().includes(input) ||
      demandeDeCour.matiere.matiereId.toString().includes(input) ||
      demandeDeCour.etudiant.etudiantId.toString().includes(input) ||
      demandeDeCour.teacher.teacherId.toString().includes(input)
    );
  }
}
