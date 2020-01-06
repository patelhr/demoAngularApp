import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'students',
        component: StudentsComponent,
        children: [
            { path: '', component: StudentsListComponent },
            {
                path: 'list', component: StudentsListComponent
            },
            {
                path: 'add', component: AddStudentComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]
            },
            {
                path: 'update', component: StudentsEditComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }