export class NiveauEtude {
    niveauEtude_Id: number;
    text_niveau: string;
  
    constructor(data: any = {}) {
      this.niveauEtude_Id = data.niveauEtude_Id || null;
      this.text_niveau = data.text_niveau || '';
    }
  }
  