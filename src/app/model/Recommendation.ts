import { Etudiant } from "./Etudiant";
import { Teacher } from "./Teacher";

export class Recommendation {
    recommendationId: number;
    recommandation: string;
    etudiant: Etudiant; // Assuming Etudiant is another model/class
    teacher: Teacher; // Assuming Teacher is another model/class
  
    constructor(data: any = {}) {
      this.recommendationId = data.recommendationId || null;
      this.recommandation = data.recommandation || '';
      this.etudiant = data.etudiant ? new Etudiant(data.etudiant) : null;
      this.teacher = data.teacher ? new Teacher(data.teacher) : null;
    }
  }
  