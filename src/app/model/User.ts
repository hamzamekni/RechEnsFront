import { Adress } from "./Adress";

export class User {
    userId: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    password: string;
    role: string;
    enabled: boolean;
    resetToken: number;
    profileImage: string; // Assuming profileImage is a base64 encoded string
    phoneNumber: number;
    adress: Adress; // Assuming Adress is another model/class
  
    constructor(data: any = {}) {
      this.userId = data.userId || null;
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
      this.birthday = data.birthday ? new Date(data.birthday) : null;
      this.email = data.email || '';
      this.password = data.password || '';
      this.role = data.role || '';
      this.enabled = data.enabled || false;
      this.resetToken = data.resetToken || 0;
      this.profileImage = data.profileImage || ''; // Assuming profileImage is a base64 encoded string
      this.phoneNumber = data.phoneNumber || null;
      this.adress = data.adress ? new Adress(data.adress) : null;
    }
  }
  