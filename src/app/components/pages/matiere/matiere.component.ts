import { Component, OnInit } from '@angular/core';
import { MatiereService } from 'src/app/matiere.service';
import { Matiere } from 'src/app/model/Matiere';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
  matieres: Matiere[] = [];

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
    this.getMatieres();
  }

  getMatieres(): void {
    this.matiereService.getMatiereList()
      .subscribe(matieres => this.matieres = matieres);
  }

  deleteMatiere(matiereId: number): void {
    this.matiereService.deleteMatiere(matiereId)
      .subscribe(() => {
        // Remove the deleted matiere from the matieres array
        this.matieres = this.matieres.filter(matiere => matiere.matiere_Id !== matiereId);
      });
  }
}
