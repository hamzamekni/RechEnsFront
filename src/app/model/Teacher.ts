export class Teacher {
    teacherId: number;
    firstName: string;
    email: string;
    montant_non_paye: number;
    statut_etude_presentiel: string; // Assuming statut_etude_presentiel is a string enum on the backend
    detailEtudePresentiel: string;
    detailEnseigant: string;
    password: string;
    phoneNumber: number;
    role: string; // Assuming role is a string enum on the backend
    enabled: boolean;
    uploadedUrls: string[];
  
    constructor(data: any = {}) {
      this.teacherId = data.teacherId || null;
      this.firstName = data.firstName || '';
      this.email = data.email || '';
      this.montant_non_paye = data.montant_non_paye || 0;
      this.statut_etude_presentiel = data.statut_etude_presentiel || '';
      this.detailEtudePresentiel = data.detailEtudePresentiel || '';
      this.detailEnseigant = data.detailEnseigant || '';
      this.password = data.password || '';
      this.phoneNumber = data.phoneNumber || null;
      this.role = data.role || '';
      this.enabled = data.enabled || false;
      this.uploadedUrls = data.uploadedUrls || [];
    }
  }
  