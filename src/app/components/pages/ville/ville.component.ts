import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/model/Ville';
import { VilleService } from 'src/app/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit {
  villes: Ville[] = [];

  constructor(private villeService: VilleService) { }

  ngOnInit(): void {
    this.getVilles();
  }

  getVilles(): void {
    this.villeService.getVillesList()
      .subscribe(villes => this.villes = villes);
  }
}

