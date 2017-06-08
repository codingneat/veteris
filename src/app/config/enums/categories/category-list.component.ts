import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums from '../enums.actions';
import { EnumsService } from '../enums.service';


@Component({
  selector: 'categories-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.styl']
})
export class CategoryListComponent {
  @Output() categorySelected = new EventEmitter();
  categories$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private enumService: EnumsService) {
    this.categories$ = store.select(enums.getCategoriesState);
  }


  getItemName(index, item) {
    return item.name;
  }

  delete(id, index) {
    this.enumService.deleteCategory(id)
    this.store.dispatch(new enums.removeCategory(index));
  }

  edit(category) {
    this.categorySelected.emit(category);
  }


}
