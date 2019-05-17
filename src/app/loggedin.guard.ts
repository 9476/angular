import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoggedinGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}
