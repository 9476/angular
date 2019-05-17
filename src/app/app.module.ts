import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, childRoutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoggedinGuard } from './loggedin.guard';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: childRoutes, canActivate: [LoggedinGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    AboutComponent,
    StudentListComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) //缺乏路由配置
  ],
  providers: [LoggedinGuard, AuthService, LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
