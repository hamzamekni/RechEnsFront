import { Ville } from "./Ville";

export class Region {
    region_Id: number;
    villes: Ville; // Assuming Ville is another model/class
  
    constructor(data: any = {}) {
      this.region_Id = data.region_Id || null;
      this.villes = data.villes ? new Ville(data.villes) : null;
    }
  }
  