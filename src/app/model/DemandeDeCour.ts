import { Adress } from "./Adress";
import { Etudiant } from "./Etudiant";
import { Teacher } from "./Teacher";
import { Matiere } from "./Matiere";


export class DemandeDeCour {
    demandeDeCour_Id: number;
    titre_demande: string;
    detail_demande: string;
    locale: string;
    prix_max: number;
    prix_min: number;
    statutDemande: string;
    adress: Adress; // Assuming Adress is another model/class
    matiere: Matiere; // Assuming Matiere is another model/class
    etudiant: Etudiant; // Assuming Etudiant is another model/class
    teacher: Teacher; // Assuming Teacher is another model/class
  
    constructor(data: any = {}) {
      this.demandeDeCour_Id = data.demandeDeCour_Id || null;
      this.titre_demande = data.titre_demande || '';
      this.detail_demande = data.detail_demande || '';
      this.locale = data.locale || '';
      this.prix_max = data.prix_max || 0;
      this.prix_min = data.prix_min || 0;
      this.statutDemande = data.statutDemande || '';
      this.adress = data.adress ? new Adress(data.adress) : null;
      this.matiere = data.matiere ? new Matiere(data.matiere) : null;
      this.etudiant = data.etudiant ? new Etudiant(data.etudiant) : null;
      this.teacher = data.teacher ? new Teacher(data.teacher) : null;
      // Initialize other properties as needed
    }
  }
  