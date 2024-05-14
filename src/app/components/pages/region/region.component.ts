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

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.regionService.getRegionList()
      .subscribe(regions => this.regions = regions);
  }

  deleteRegion(regionId: number): void {
    this.regionService.deleteRegion(regionId)
      .subscribe(() => {
        // Remove the deleted region from the regions array
        this.regions = this.regions.filter(region => region.region_Id !== regionId);
      });
  }
}
