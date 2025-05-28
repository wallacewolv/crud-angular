import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, CoursesListComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.courses$ = this.listCourses();
  }

  listCourses(): Observable<Course[]> {
    return this.coursesService.list().pipe(
      catchError(() => {
        this.openSnackBar('Erro ao carregar cursos.');
        return of([]);
      }),
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], {
      relativeTo: this.activatedRoute,
    });
  }

  onRemove({ _id }: Course) {
    this.coursesService.remove(_id).subscribe({
      next: () => {
        this.openSnackBar('Curso removido com sucesso.', 'OK');
        this.courses$ = this.listCourses();
      },
      error: () => {
        this.openSnackBar('Erro ao tentar remover o curso.');
      },
    });
  }

  private openSnackBar(message: string, action = 'X') {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
