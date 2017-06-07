import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';

import { AuthService } from '../auth/auth.service'
import * as actions from '../auth/auth.actions';


@Injectable()
export class MainLayoutComponentGuard implements CanActivate {
  authenticated$: Observable<any>;
  auth: Boolean;

  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router,
    private authService: AuthService) {
    this.authenticated$ = store.select('auth', 'authenticated');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.authenticated$.subscribe(val => {
      this.auth = val;
    });

    if (localStorage.getItem('id_token') && this.auth) {
      return true;
    } else if (localStorage.getItem('id_token')) {
       return this.authService.checkToken(localStorage.getItem('id_token')).catch();
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
