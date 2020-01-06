import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentsAc } from '../students.model';
import { HttpService } from 'src/app/core/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/core/loader.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
})
export class StudentsEditComponent implements OnInit {
  students: Array<StudentsAc>;
  studentsUpdateApiUrl: string;
  orignalStateOfStudent: StudentsAc;
  constructor(private readonly httpService: HttpService, private readonly snackBar: MatSnackBar,
    private readonly loaderService: LoaderService) {
    this.students = new Array<StudentsAc>();
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    // return this.httpService.get<StudentsAc[]>(this.studentsApiUrl).subscribe(result => {
    //     this.students = result;
    // }, error => console.error(error));
    this.students = [
      { firstName: 'hardik', lastName: 'patel', id: 1 },
      { firstName: 'vishal', lastName: 'patel', id: 2 },
      { firstName: 'ram', lastName: 'patel', id: 3 }
    ];
  }

  updateStudentData() {
    this.loaderService.toggleLoader(true);
    setTimeout(() => {
      this.loaderService.toggleLoader(false);
    }, 10000);

    // return this.httpService.put<StudentsAc>(this.studentsUpdateApiUrl, this.student).subscribe(result => {
    //   this.snackBar.open('Student Updated.');
    // }, error => console.error(error));
  }

  deleteStudent(id: number) {
    // this.loaderService.toggleLoader(true);
    // return this.httpService.delete(`${this.studentsDeleteApiUrl}/${id}`).subscribe(() => {
    //     this.loaderService.toggleLoader(false);
    //     this.snackBar.open('Deleted student');
    // }, error => console.error(error));
    this.students = this.students.filter(x => x.id !== id);
  }
}
