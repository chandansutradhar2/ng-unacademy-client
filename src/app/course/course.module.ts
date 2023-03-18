import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../ui/ui.module';

const route: Routes = [
  { path: '', component: CourseListComponent }
];
@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent
  ],
  imports: [
    CommonModule, UIModule, RouterModule.forChild(route),
  ],
  exports: [RouterModule]
})
export class CourseModule { }
