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

  constructor(private supportCourService: SupportCourService) { }

  ngOnInit(): void {
    this.getSupportCours();
  }

  getSupportCours(): void {
    this.supportCourService.getSupportCoursList()
      .subscribe(supportCours => this.supportCours = supportCours);
  }

  deleteSupportCour(id: number): void {
    this.supportCourService.deleteSupportCour(id)
      .subscribe(() => {
        // Remove the deleted support cour from the supportCours array
        this.supportCours = this.supportCours.filter(supportCour => supportCour.supportCour_Id !== id);
      });
  }
}
