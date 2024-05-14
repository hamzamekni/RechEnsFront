import { Etudiant } from "./Etudiant";
import { Teacher } from "./Teacher";

export class Paiement {
    paiementId: number;
    Signe_Paiement: string;
    Montant_Paiement: number;
    jour_Paiement: Date; // Assuming you handle date as a Date object
    statut_paiement: string; // Assuming statut_paiement is a string enum on the backend
    teacher: Teacher; // Assuming Teacher is another model/class
    etudiant: Etudiant; // Assuming Etudiant is another model/class
  
    constructor(data: any = {}) {
      this.paiementId = data.paiementId || null;
      this.Signe_Paiement = data.Signe_Paiement || '';
      this.Montant_Paiement = data.Montant_Paiement || 0;
      this.jour_Paiement = data.jour_Paiement ? new Date(data.jour_Paiement) : null;
      this.statut_paiement = data.statut_paiement || '';
      this.teacher = data.teacher ? new Teacher(data.teacher) : null;
      this.etudiant = data.etudiant ? new Etudiant(data.etudiant) : null;
    }
  }
  