import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { StudentsAc } from '../students.model';
import { LoaderService } from 'src/app/core/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsListComponent implements OnInit {
    studentsApiUrl = 'api/students';
    studentsDeleteApiUrl = 'studentsDeleteApiUrl';
    students: Array<StudentsAc>;
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
}
