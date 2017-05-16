import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../enums.actions';
import { EnumsService }  from '../enums.service';


@Component({
  selector: 'themes-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent {
  @Output() themeSelected = new EventEmitter();
  themes$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>, 
    private enumService: EnumsService) {
    this.themes$ = store.select(enums.getThemesState);
  }


  getItemName(index, item) {
    return item.name;
  }

  delete(id, index) {
   this.enumService.deleteTheme(id);
   this.store.dispatch(new enums.removeTheme(index));
  }

  edit(theme) {
    this.themeSelected.emit(theme);
  }


}
