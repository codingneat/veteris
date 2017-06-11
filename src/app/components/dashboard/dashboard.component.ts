import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as webpages from '../../webpage/webpage.actions';
import { WebpageService } from '../../webpage/webpage.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent {
  name: string;
  webpages$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private webpageService: WebpageService,
    private router: Router) {
    this.webpages$ = store.select(webpages.getWebpagesState);
  }


  add() {
    this.webpageService.create(this.name).then(x => {
      this.name = "";
      this.router.navigate(['/saving_webpage']);
    });

  }

  ngOnInit() {
    this.store.dispatch(new webpages.loadLastWebpages());
  }
}
