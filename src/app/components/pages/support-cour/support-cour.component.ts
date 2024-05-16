import { Component, OnInit } from '@angular/core';
import { SupportCour } from 'src/app/model/SupportCour';
import { SupportCourService } from 'src/app/support-cour.service';

@Component({
  selector: 'app-support-cour',
  templateUrl: './support-cour.component.html',
  styleUrls: ['./support-cour.component.scss']
})
export class SupportCourComponent implements OnInit {
  supportCours: SupportCour[] = [];
  filteredSupportCours: SupportCour[] = [];

  constructor(private supportCourService: SupportCourService) { }

  ngOnInit(): void {
    this.getSupportCours();
  }

  getSupportCours(): void {
    this.supportCourService.getSupportCoursList()
      .subscribe((supportCours: SupportCour[]) => {
        this.supportCours = supportCours;
        this.filteredSupportCours = supportCours; // Initialize filtered support cours
      });
  }

  deleteSupportCour(id: number): void {
    this.supportCourService.deleteSupportCour(id)
      .subscribe(() => {
        // Remove the deleted support cour from the supportCours array
        this.supportCours = this.supportCours.filter(supportCour => supportCour.supportCour_Id !== id);
        this.filteredSupportCours = this.filteredSupportCours.filter(supportCour => supportCour.supportCour_Id !== id);
      });
  }

  searchSupportCours(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredSupportCours = this.supportCours.filter(supportCour =>
      supportCour.supportCour_Id.toString().toUpperCase().includes(input) ||
      supportCour.signe_cours.toUpperCase().includes(input) ||
      supportCour.type_cours.toUpperCase().includes(input)
    );
  }
}
