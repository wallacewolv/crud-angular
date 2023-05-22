import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [

    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
  ]
})
export class CoursesModule { }
