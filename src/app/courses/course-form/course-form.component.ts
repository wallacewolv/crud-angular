import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  form: FormGroup;
  courseCategories: Array<CourseCategory>;

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });

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
      (result) => {
        console.log(result);
      },
      (error) => {
        this.onError();
      }
    );
  }

  onCancel() {}

  private onError() {
    this.snackBar.open('Erro ao salvar curso', 'X', {
      duration: 5000,
    });
  }
}
