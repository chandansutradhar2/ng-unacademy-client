import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'cn-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  courses: Course[] = [];
  constructor(private courseSvc: CourseService) {
    this.getAllCourse();
  }

  getAllCourse() {
    this.courseSvc.getAllCourse().then(r => {
      this.courses = r;
    })
  }
}
