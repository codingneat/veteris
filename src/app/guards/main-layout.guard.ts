import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';

import { AuthenticationService } from '../core/services';

@Injectable()
export class MainLayoutComponentGuard implements CanActivate {
  authenticated$: Observable<any>;
  auth: Boolean;

  constructor(
    private store: Store<fromRoot.AppState>, 
    private router: Router, 
    private authenticationService: AuthenticationService) {
      this.authenticated$ = store.select('auth','authenticated');
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    this.authenticated$.subscribe(val => {
        this.auth = val;
    });
    if (localStorage.getItem('id_token') && this.auth) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
