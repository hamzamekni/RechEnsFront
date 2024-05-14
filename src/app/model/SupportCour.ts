export class SupportCour {
    supportCour_Id: number;
    signe_cours: string;
    type_cours: string;
  
    constructor(data: any = {}) {
      this.supportCour_Id = data.supportCour_Id || null;
      this.signe_cours = data.signe_cours || '';
      this.type_cours = data.type_cours || '';
    }
  }
  