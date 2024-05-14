import { Region } from "./Region"; // Import the Region model if it exists

export class Adress {
  adress_Id: number;
  road_adress: string;
  region: Region; // Assuming Region is another model/class

  constructor(data: any = {}) {
    this.adress_Id = data.adress_Id || null;
    this.road_adress = data.road_adress || '';
    this.region = data.region ? new Region(data.region) : null;
  }
}
