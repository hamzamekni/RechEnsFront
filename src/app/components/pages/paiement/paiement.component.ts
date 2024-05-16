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
  filteredPaiements: Paiement[] = [];

  constructor(private paiementService: PaiementService) { }

  ngOnInit(): void {
    this.getPaiements();
  }

  getPaiements(): void {
    this.paiementService.getPaiementsList()
      .subscribe((paiements: Paiement[]) => {
        this.paiements = paiements;
        this.filteredPaiements = paiements; // Initialize filtered paiements
      });
  }

  deletePaiement(paiementId: number): void {
    this.paiementService.deletePaiement(paiementId)
      .subscribe(() => {
        // Remove the deleted payment from the paiements array
        this.paiements = this.paiements.filter(paiement => paiement.paiementId !== paiementId);
        this.filteredPaiements = this.filteredPaiements.filter(paiement => paiement.paiementId !== paiementId);
      });
  }

  searchPaiements(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredPaiements = this.paiements.filter(paiement => 
      paiement.paiementId.toString().toUpperCase().includes(input) ||
      paiement.signe_Paiement.toUpperCase().includes(input) ||
      paiement.montant_Paiement.toString().toUpperCase().includes(input) ||
      paiement.jour_Paiement.toString().includes(input) ||
      paiement.statut_paiement.toUpperCase().includes(input)
    );
  }
}
