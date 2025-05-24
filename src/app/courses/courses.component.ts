import { Component, OnInit } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'front-end',
    },
    {
      _id: '2',
      name: 'Node.js',
      category: 'back-end',
    },
  ];

  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
