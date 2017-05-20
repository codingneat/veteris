import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../core/services';


@Injectable()
export class UnauthenticatedGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate():boolean {
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
