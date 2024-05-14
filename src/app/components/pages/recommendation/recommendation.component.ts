import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/model/Recommendation';
import { RecommendationService } from 'src/app/recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  recommendations: Recommendation[] = [];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.getRecommendations();
  }

  getRecommendations(): void {
    this.recommendationService.getRecommendationList()
      .subscribe(recommendations => this.recommendations = recommendations);
  }
}

