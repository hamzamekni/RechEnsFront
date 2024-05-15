import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/model/Teacher';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  allTeachers: any[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getAllTeachers();
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
}
