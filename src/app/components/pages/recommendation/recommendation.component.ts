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

  deleteRecommendation(recommendationId: number): void {
    this.recommendationService.deleteRecommendation(recommendationId)
      .subscribe(() => {
        // Remove the deleted recommendation from the recommendations array
        this.recommendations = this.recommendations.filter(recommendation => recommendation.recommendationId !== recommendationId);
      });
  }
}
