import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/Etudiant'; // Import the Etudiant model
import { EtudiantService } from 'src/app/etudiant.service'; // Import the EtudiantService

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
}
