import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './app.reducer';
import * as app from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  constructor(
    private store: Store<fromRoot.AppState>
  ) {
  }

  ngOnInit() {
  }
}
