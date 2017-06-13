import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UnauthenticatedGuard implements CanActivate {

  constructor(private router: Router, ) { }

  canActivate(): boolean {
    return true;
  }
}
