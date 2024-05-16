import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/Region';
import { RegionService } from 'src/app/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  regions: Region[] = [];
  filteredRegions: Region[] = [];

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.regionService.getRegionList()
      .subscribe((regions: Region[]) => {
        this.regions = regions;
        this.filteredRegions = regions; // Initialize filtered regions
      });
  }

  deleteRegion(regionId: number): void {
    this.regionService.deleteRegion(regionId)
      .subscribe(() => {
        this.regions = this.regions.filter(region => region.region_Id !== regionId);
        this.filteredRegions = this.filteredRegions.filter(region => region.region_Id !== regionId);
      });
  }

  searchRegions(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredRegions = this.regions.filter(region => 
      region.region_Id.toString().toUpperCase().includes(input)
    );
  }
}
