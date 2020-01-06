import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent {
    constructor(private readonly authService: AuthService) {
    }
}
