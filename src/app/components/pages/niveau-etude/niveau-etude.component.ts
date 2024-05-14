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
}

