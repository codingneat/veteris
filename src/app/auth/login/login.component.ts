import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from "../../app.reducer";
import * as actions from '../auth.actions';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.styl']
})

export class LoginComponent {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit() {

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.store.dispatch(new actions.LoginAction({ email: this.model.username, password: this.model.password, onCompleteActions: [new actions.Redirect({ route: '/' })] }));
    }
}
