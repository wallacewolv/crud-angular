import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

interface CourseCategory {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  courseCategories: Array<CourseCategory>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.courseCategories = [
      { value: 'null', viewValue: '' },
      { value: 'front-end', viewValue: 'Front-End' },
      { value: 'back-end', viewValue: 'Back-End' },
      { value: 'big-data', viewValue: 'Big Data' },
    ];
  }

  ngOnInit(): void {}

  onSubmit() {
    this.coursesService.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }
}