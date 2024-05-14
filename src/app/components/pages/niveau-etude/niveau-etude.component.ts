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

  constructor(private niveauEtudeService: NiveauEtudeService) { }

  ngOnInit(): void {
    this.getNiveauxEtude();
  }

  getNiveauxEtude(): void {
    this.niveauEtudeService.getNiveauEtudesList()
      .subscribe(niveauxEtude => this.niveauxEtude = niveauxEtude);
  }

  deleteNiveauEtude(niveauEtudeId: number): void {
    this.niveauEtudeService.deleteNiveauEtude(niveauEtudeId)
      .subscribe(() => {
        // Remove the deleted study level from the niveauxEtude array
        this.niveauxEtude = this.niveauxEtude.filter(niveauEtude => niveauEtude.niveauEtude_Id !== niveauEtudeId);
      });
  }
}
