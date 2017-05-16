import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { Theme } from '../../../models/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../enums.actions';
import { EnumsService }  from '../enums.service';


@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent  {
  @Input()  category: Category;
  name: string;
  theme: any;
  themes$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private enumsService: EnumsService) {
      this.themes$ = store.select(enums.getThemesState);
  }


  save() {
    this.category.name = this.name;
    this.category.theme = this.theme;
    if(!this.category._id) {
      delete this.category["_id"];
      this.enumsService.createCategory(this.category).then(x => this.store.dispatch(new enums.addCategory(x)));
    }else{
      this.enumsService.updateCategory(this.category);
    }
    this.name = ""; 
    this.theme = ""; 
  }

  ngOnChanges(...args: any[]) {
    this.name = args[0].category.currentValue.name;
    this.theme = args[0].category.currentValue.theme._id;
  }


}
