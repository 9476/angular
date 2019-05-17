import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch06';


  constructor(private auth: AuthService, private router: Router) { }
  loggout() {
    this.auth.loggout();
    this.router.navigate(['./login']);
  }
}