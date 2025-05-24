import { Component, OnInit } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }
}
