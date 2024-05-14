import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/model/Adress'; // Import the Adress model
import { AdressService } from 'src/app/adress.service'; // Import the AdressService

@Component({
  selector: 'app-adress', 
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss'] // Correct the typo, it should be styleUrls
})
export class AdressComponent implements OnInit {
  addresses: Adress[] = [];

  constructor(private adressService: AdressService) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses(): void {
    this.adressService.getAdressList()
      .subscribe(addresses => this.addresses = addresses);
  }
}
