import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 是否已经登录
  Username: string;
  private loggedIn = false;

  constructor(private httpclient: HttpClient, private router: Router) { }

  login(u: any): boolean {
    // let u = {
    //   username:user,
    //   password:password
    // };

    this.httpclient.post('http://127.0.0.1:8082/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggedIn = true;
          this.router.navigate(['home']);
          alert('登入成功');
        }
        else {
          this.loggedIn = false;
          alert('登入失败');
        }
      }
    );
    return true;
  }

  loggout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
