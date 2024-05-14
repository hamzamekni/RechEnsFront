import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getEtudiantList()
      .subscribe(etudiants => this.etudiants = etudiants);
  }

  deleteEtudiant(etudiantId: number): void {
    this.etudiantService.deleteEtudiant(etudiantId)
      .subscribe(() => {
        // Remove the deleted student from the etudiants array
        this.etudiants = this.etudiants.filter(etudiant => etudiant.etudiant_Id !== etudiantId);
      });
  }
}
