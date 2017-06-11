import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';

import * as fromRoot from '../../app.reducer';
import * as webpages from '../webpage.actions';
import { WebpageService } from '../webpage.service';
import { Webpage } from '../../models/webpage'


@Component({
  selector: 'webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.styl']
})
export class WebpageComponent {
  webpage$: Observable<any[]>

  constructor(
    private store: Store<fromRoot.AppState>,
    private route: ActivatedRoute) {
    this.webpage$ = store.select(webpages.getWebpageState);
  }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.store.dispatch(new webpages.loadWebpage(params['id'])));
  }


}
