import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import * as app from '../app.actions';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  appName = "Tanaris";

    constructor(
    private store: Store<fromRoot.AppState>
  ) {
  }


  ngOnInit() {
    this.store.dispatch(new app.loadData());
  }
}
