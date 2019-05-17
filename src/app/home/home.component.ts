import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const childRoutes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentListComponent },
  { path: 'user', component: UserManagementComponent },
  { path: 'login', component: LoginFormComponent },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuIndex = 2;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  menuClicked(index) {
    this.menuIndex = index;
    if (index == 1) {
      this.router.navigate(['/home/user']);
    }
    else if (index == 2) {
      this.router.navigate(['/home/student']);
    }
    else if (index == 3) {
      this.auth.loggout();
      alert('您已成功退出登录');
      this.router.navigate(['/login']);
    }
  }
}
