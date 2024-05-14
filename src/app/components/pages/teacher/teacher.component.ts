import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/Teacher';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeacherList()
      .subscribe(teachers => this.teachers = teachers);
  }
}

