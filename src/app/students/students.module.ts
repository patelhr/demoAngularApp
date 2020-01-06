import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { SharedModule } from '../shared/shared.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentsEditComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
