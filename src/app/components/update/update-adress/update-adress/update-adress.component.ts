import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdressService } from 'src/app/adress.service';
import { Adress } from 'src/app/model/Adress';
import { Region } from 'src/app/model/Region';
import { RegionService } from 'src/app/region.service';

@Component({
  selector: 'app-update-adress',
  templateUrl: './update-adress.component.html',
  styleUrl: './update-adress.component.scss'
})
export class UpdateAdressComponent {
  updateAddressForm: FormGroup;
  regionIds: number[] = []; // Array to hold region IDs

  constructor(
    private fb: FormBuilder,
    private addressService: AdressService,
    private route: ActivatedRoute,
    private regionService: RegionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getRegionIds(); // Fetch region IDs when component initializes

    this.route.paramMap.subscribe(params => {
      const addressId = +params.get('id');
      if (addressId) {
        this.getAddress(addressId);
      }
    });
  }

  private initForm(): void {
    this.updateAddressForm = this.fb.group({
      adress_Id: [{ value: '', disabled: true }, Validators.required],
      road_adress: ['', Validators.required],
      region: this.fb.group({
        region_Id: ['', Validators.required]
      })
      // Add more fields as necessary
    });
  }

  private getAddress(id: number): void {
    this.addressService.getAdress(id).subscribe(
      (address: Adress) => {
        this.updateAddressForm.patchValue(address);
      },
      (error) => {
        console.error('Error fetching address:', error);
      }
    );
  }

  private getRegionIds(): void {
    this.regionService.getRegionList().subscribe(
      (regions: Region[]) => {
        this.regionIds = regions.map(region => region.region_Id);
      },
      (error) => {
        console.error('Error fetching regions:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.updateAddressForm.valid) {
      const updatedAddress: Adress = this.updateAddressForm.getRawValue();
      this.addressService.updateAdress(updatedAddress.adress_Id, updatedAddress).subscribe(response => {
        // Handle successful update
        console.log('Address updated:', response);
        this.router.navigate(['/app-adress']);
      }, error => {
        // Handle error
        console.error('Error updating address:', error);
      });
    }
  }
}
