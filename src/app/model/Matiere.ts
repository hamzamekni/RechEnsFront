import { NiveauEtude } from './NiveauEtude'; // Import the NiveauEtude model if it exists
import { Teacher } from './Teacher'; // Import the Teacher model if it exists

export class Matiere {
  matiere_Id: number;
  code_etude: number;
  matiere_name : string;
  niveauEtude: NiveauEtude; // Assuming NiveauEtude is another model/class
  teacher: Teacher; // Assuming Teacher is another model/class
 

  constructor(data: any = {}) {
    this.matiere_Id = data.matiere_Id || null;
    this.code_etude = data.code_etude || 0;
    this.niveauEtude = data.niveauEtude ? new NiveauEtude(data.niveauEtude) : null;
    this.teacher = data.teacher ? new Teacher(data.teacher) : null;
  }
}
