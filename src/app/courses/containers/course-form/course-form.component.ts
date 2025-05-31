/* eslint-disable dot-notation */
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent implements OnInit {
  courseForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {
    this.courseForm = this.formBuilder.group({
      _id: new UntypedFormControl(''),
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      category: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    const course: Course = this.activatedRoute.snapshot.data['course'];

    this.courseForm.setValue({
      _id: course._id,
      name: course.name,
      category: course.category,
    });
  }

  onSubmit() {
    const newCourse = this.courseForm.getRawValue();

    this.coursesService.save(newCourse).subscribe({
      next: () => {
        this.openSnackBar('Curso salvo com sucesso!', 'OK');
        this.onCancel();
      },
      error: () => {
        this.openSnackBar('Erro ao salvar curso.');
      },
    });
  }

  onCancel() {
    this.location.back();
  }

  controlField(fieldName: string): UntypedFormControl {
    return this.courseForm.get(fieldName) as UntypedFormControl;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.controlField(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório.';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors
        ? field.errors['minlength'].requiredLength
        : 3;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors
        ? field.errors['maxlength'].requiredLength
        : 100;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo inválido.';
  }

  private openSnackBar(message: string, action = 'X') {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
