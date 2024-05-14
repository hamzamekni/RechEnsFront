import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/model/Adress';
import { AdressService } from 'src/app/adress.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
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

  deleteAddress(addressId: number): void {
    this.adressService.deleteAdress(addressId)
      .subscribe(() => {
        // Remove the deleted address from the addresses array
        this.addresses = this.addresses.filter(address => address.adress_Id !== addressId);
      });
  }
}
