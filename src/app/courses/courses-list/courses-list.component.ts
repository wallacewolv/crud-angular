import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, CategoryPipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input({ required: true }) courses: Course[] = [];

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
