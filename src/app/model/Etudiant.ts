import { User } from "./User";

export class Etudiant {
    etudiantId: number;
    Montant: number;
    Section: string;
    users: User; // Assuming User is another model/class
  
    constructor(data: any = {}) {
      this.etudiantId = data.etudiant_Id || null;
      this.Montant = data.Montant || 0;
      this.Section = data.Section || '';
      this.users = data.users ? new User(data.users) : null;
    }
  }
  