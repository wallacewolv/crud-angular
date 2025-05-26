import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent implements OnInit {
  courseForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.courseForm = this.formBuilder.group({
      name: new UntypedFormControl(null),
      category: new UntypedFormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {}

  onCancel() {}
}
