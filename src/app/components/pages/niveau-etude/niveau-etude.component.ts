import { Component, OnInit } from '@angular/core';
import { NiveauEtude } from 'src/app/model/NiveauEtude';
import { NiveauEtudeService } from 'src/app/niveau-etude.service';

@Component({
  selector: 'app-niveau-etude',
  templateUrl: './niveau-etude.component.html',
  styleUrls: ['./niveau-etude.component.scss']
})
export class NiveauEtudeComponent implements OnInit {
  niveauxEtude: NiveauEtude[] = [];
  filteredNiveauxEtude: NiveauEtude[] = [];

  constructor(private niveauEtudeService: NiveauEtudeService) { }

  ngOnInit(): void {
    this.getNiveauxEtude();
  }

  getNiveauxEtude(): void {
    this.niveauEtudeService.getNiveauEtudesList()
      .subscribe((niveauxEtude: NiveauEtude[]) => {
        this.niveauxEtude = niveauxEtude;
        this.filteredNiveauxEtude = niveauxEtude; // Initialize filtered niveauxEtude
      });
  }

  deleteNiveauEtude(niveauEtudeId: number): void {
    this.niveauEtudeService.deleteNiveauEtude(niveauEtudeId)
      .subscribe(() => {
        this.niveauxEtude = this.niveauxEtude.filter(niveauEtude => niveauEtude.niveauEtude_Id !== niveauEtudeId);
        this.filteredNiveauxEtude = this.filteredNiveauxEtude.filter(niveauEtude => niveauEtude.niveauEtude_Id !== niveauEtudeId);
      });
  }

  searchNiveauxEtude(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredNiveauxEtude = this.niveauxEtude.filter(niveauEtude => 
      niveauEtude.niveauEtude_Id.toString().toUpperCase().includes(input) ||
      niveauEtude.text_niveau.toUpperCase().includes(input)
    );
  }
}
