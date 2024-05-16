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
  filteredMatieres: Matiere[] = [];

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
    this.getMatieres();
  }

  getMatieres(): void {
    this.matiereService.getMatiereList()
      .subscribe((matieres: Matiere[]) => {
        this.matieres = matieres;
        this.filteredMatieres = matieres; // Initialize filtered matieres
      });
  }

  deleteMatiere(matiereId: number): void {
    this.matiereService.deleteMatiere(matiereId)
      .subscribe(() => {
        this.matieres = this.matieres.filter(matiere => matiere.matiere_Id !== matiereId);
        this.filteredMatieres = this.filteredMatieres.filter(matiere => matiere.matiere_Id !== matiereId);
      });
  }

  searchMatieres(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredMatieres = this.matieres.filter(matiere => 
      matiere.matiere_Id.toString().toUpperCase().includes(input) ||
      matiere.code_etude.toString().includes(input) ||
      matiere.matiere_name.toUpperCase().includes(input) ||
      matiere.niveauEtude.text_niveau.toUpperCase().includes(input) ||
      matiere.teacher.teacherId.toString().toUpperCase().includes(input)
    );
  }
}
