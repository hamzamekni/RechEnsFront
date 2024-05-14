import { Component, OnInit } from '@angular/core';
import { Paiement } from 'src/app/model/Paiement';
import { PaiementService } from 'src/app/paiement.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {
  paiements: Paiement[] = [];

  constructor(private paiementService: PaiementService) { }

  ngOnInit(): void {
    this.getPaiements();
  }

  getPaiements(): void {
    this.paiementService.getPaiementsList()
      .subscribe(paiements => this.paiements = paiements);
  }
}

