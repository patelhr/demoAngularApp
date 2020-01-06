import { Component, OnInit } from '@angular/core';
import { StudentsAc } from '../students.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {
  student: StudentsAc;

  constructor() {
    this.student = new StudentsAc();
  }

  ngOnInit() {
  }

  addStudent() {

  }
}
