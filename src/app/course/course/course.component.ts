import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'cn-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent {
  @Input() course!: Course;
  constructor() {

  }


}
