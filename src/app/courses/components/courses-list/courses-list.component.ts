import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, CategoryPipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input({ required: true }) courses: Course[] = [];
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<Course>();

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit();
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }
}
