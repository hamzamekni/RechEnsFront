import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatiereService } from 'src/app/matiere.service';
import { DemandeDeCour } from 'src/app/model/DemandeDeCour';
import { Matiere } from 'src/app/model/Matiere';
import { TeacherService } from 'src/app/teacher.service';
import { Chart, registerables } from 'chart.js';
import { DemandeDeCourService } from 'src/app/demande-de-cour.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-ai-startup',
  templateUrl: './ai-startup.component.html',
  styleUrls: ['./ai-startup.component.scss']
})
export class AiStartupComponent implements OnInit {
  matieres: Matiere[] = [];
  allTeachers: any[];
  @Input() demandes: DemandeDeCour[];
  @Input() users: User[];
  constructor(private teacherService: TeacherService,private matiereService: MatiereService,
    private userService: UserService,
    private demandeDeCourService: DemandeDeCourService) {
    Chart.register(...registerables);
    
   }

  ngOnInit(): void {
    this.getAllTeachers();
    this.getMatieres();
    this.createBarChart();
    this.createPieChart();
    this.getAllDemandeDeCour(); // Fetch demandeDeCour data first
    this. getAllUsers();
    
  }

  getMatieres(): void {
    this.matiereService.getMatiereList()
      .subscribe(matieres => this.matieres = matieres);
  }


  getAllTeachers(): void {
    this.teacherService.getTeacherList().subscribe(
      (data: any) => {
        this.allTeachers = data;
      },
      (error: any) => {
        console.error('Error fetching teachers:', error);
        // Optionally, handle the error
      }
    );
  }

  getAllDemandeDeCour(): void {
    this.demandeDeCourService.getDemandeDeCoursList().subscribe(
      (data: any) => {
        this.demandes = data;
        this.createBarChart(); // Call createBarChart() once data is fetched
      },
      (error: any) => {
        console.error('Error fetching Demand de cours:', error);
        // Optionally, handle the error
      }
    );
  }

  getAllUsers(): void {
    this.userService.getUserList().subscribe(
      (data: any) => {
        this.users = data;
        this.createPieChart(); // Call createPieChart() once data is fetched
      },
      (error: any) => {
        console.error('Error fetching users:', error);
        // Optionally, handle the error
      }
    );
  }


  createBarChart(): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    if (this.demandes) {
        const prixMaxValues = this.demandes.map((demande: any) => demande.prix_max);
        const prixMinValues = this.demandes.map((demande: any) => demande.prix_min);

        // Calculate the total number of demandeDeCour entries
        const totalDemandeDeCour = this.demandes.length;
        const totalValues = Array(this.demandes.length).fill(totalDemandeDeCour);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.demandes.map((demande: any) => demande.titre_demande),
                datasets: [
                    {
                        label: 'Prix Max',
                        data: prixMaxValues,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Prix Min',
                        data: prixMinValues,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Total Demandes',
                        data: totalValues,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        type: 'linear',
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        console.error('No data available for creating bar chart');
    }
}
createPieChart(): void {
  const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

  if (this.users) {
      // Count total number of users
      const totalUsers = this.users.length;

      // Count number of users by role
      const etudiantCount = this.users.filter((user: any) => user.role === 'ROLE_ETUDIANT').length;
      const teacherCount = this.users.filter((user: any) => user.role === 'ROLE_TEACHER').length;

      new Chart(ctx, {
          type: 'pie',
          data: {
              labels: ['Total Users', 'Etudiants', 'Teachers'],
              datasets: [{
                  label: 'User Distribution',
                  data: [totalUsers, etudiantCount, teacherCount],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          }
      });
  } else {
      console.error('No data available for creating pie chart');
  }
}

  
  
}
