import { Component, OnInit } from '@angular/core';
import { Student, STUDENTS } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  private isMale: number;
  private isCourse: number;
  private students: Student[];
  constructor() {
    this.isMale = 2;
    this.isCourse = 2;
    this.students = STUDENTS;
  }

  ngOnInit() {
  }

  btnName() {
    if (this.isMale == 0) {
      return '男生';
    }
    else if (this.isMale == 1) {
      return '全部';
    }
    else {
      return '女生';
    }
  }

  // shouldShow(s:Student):boolean{
  //   return this.isMale == 2 || s.gender==isMale;
  // }

  countStyle(count: number) {
    let style = {
      color: 'white',
      'background-color': 'white'
    };
    if (count >= 90) {
      style.color = 'white';
      style['background-color'] = 'green';
    }
    else if (count < 60) {
      style.color = 'white';
      style['background-color'] = 'red';
    }
    else {
      style.color = 'black';
    }
    return style;
  }

  toggleShow() {
    if (this.isMale == 0) {
      this.isMale = 1;
    }
    else if (this.isMale == 1) {
      this.isMale = 2;
    }
    else {
      this.isMale = 0;
    }
    return false;
  }

  toggleShowCourse() {
    if (this.isCourse == 2) {
      this.isCourse = 1;
    }
    else {
      this.isCourse = 2;
    }
    return false;
  }
}


