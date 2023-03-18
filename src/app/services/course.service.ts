import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  async getAllCourse(): Promise<Course[]> {
    return new Promise((resolve, reject) => {
      this.http.get(url + '/course/all').subscribe(r => {
        resolve(r as Course[]);
      });
    })

  }
}
