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
  filteredRecommendations: Recommendation[] = [];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.getRecommendations();
  }

  getRecommendations(): void {
    this.recommendationService.getRecommendationList()
      .subscribe((recommendations: Recommendation[]) => {
        this.recommendations = recommendations;
        this.filteredRecommendations = recommendations; // Initialize filtered recommendations
      });
  }

  deleteRecommendation(recommendationId: number): void {
    this.recommendationService.deleteRecommendation(recommendationId)
      .subscribe(() => {
        // Remove the deleted recommendation from the recommendations array
        this.recommendations = this.recommendations.filter(recommendation => recommendation.recommendationId !== recommendationId);
        this.filteredRecommendations = this.filteredRecommendations.filter(recommendation => recommendation.recommendationId !== recommendationId);
      });
  }

  searchRecommendations(): void {
    const input = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
    this.filteredRecommendations = this.recommendations.filter(recommendation => 
      recommendation.recommendationId.toString().toUpperCase().includes(input) ||
      recommendation.recommandation.toUpperCase().includes(input) ||
      recommendation.etudiant.etudiant_Id.toString().toUpperCase().includes(input) ||
      recommendation.teacher.teacherId.toString().toUpperCase().includes(input)
    );
  }
}
