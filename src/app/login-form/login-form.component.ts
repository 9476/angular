import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131/)) {
    return { invalidphonenumber: true };
  }
}

function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;


  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([])],
    })
    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
  }
  ngOnInit() {
  }
  onSubmit(value: any): void {
    if (!this.myForm.valid) {
      alert('表单无效！请检查');
      return;
    }

    //闭包，var/let
    console.log('you submitted value:', value);
    this.auth.login(value);
    this.router.navigate(['home']);
    this.auth.Username = value.username;
    // this.httpclient.get('http://127.0.0.1:8082/login').subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //     let u = resp[0];
    //     let o = value;
    //     if (u.username == o['username'] && u.password == o['password']) {
    //       alert('登录成功');
    //     }
    //     else {
    //       alert('登录失败');
    //     }
    //   }
    // )

    // this.httpclient.post('http://127.0.0.1:8082/login', JSON.stringify(value)).subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //     if (resp.success) {
    //       alert('登录成功!');
    //     }
    //     else {
    //       alert('登录失败!');
    //     }
    //   }
    // );
  }
}