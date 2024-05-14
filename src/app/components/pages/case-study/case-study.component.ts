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

  constructor(private demandesDeCourService: DemandeDeCourService) { }

  ngOnInit(): void {
    // Call a method to fetch demandes de cours when the component initializes
    this.fetchDemandesDeCours();
  }

  fetchDemandesDeCours(): void {
    // Call the backend service to fetch demandes de cours
    this.demandesDeCourService.getDemandeDeCoursList()
      .subscribe((demandesDeCours: DemandeDeCour[]) => {
        this.demandesDeCours = demandesDeCours;
      });
  }

  deleteDemandeDeCour(demandeDeCourId: number): void {
    // Call the backend service to delete the demande de cour
    this.demandesDeCourService.deleteDemandeDeCours(demandeDeCourId)
      .subscribe(() => {
        // Remove the deleted demande de cour from the demandesDeCours array
        this.demandesDeCours = this.demandesDeCours.filter(demandeDeCour => demandeDeCour.demandeDeCour_Id !== demandeDeCourId);
      });
  }
}
