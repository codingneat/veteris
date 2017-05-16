import { Component } from '@angular/core';
import { Theme } from '../../models/theme';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as app from '../../app.actions';

@Component({
  selector: 'config-enums',
  templateUrl: './enums.component.html'
})
export class EnumsComponent {
  selectedTheme: Theme = {_id: "", name: ""};
  selectedTag: Tag = {_id: "", name: ""};
  selectedCategory: Category = {_id: "", name: "", theme: ""};
  selectedTab: number = 0;

  constructor(
    private store: Store<fromRoot.AppState>
  ) {
    
  }

  handleThemeSelected(theme) {
    this.selectedTheme = theme;
  }

  handleTagSelected(tag) {
    this.selectedTag = tag;
  }

  handleCategorySelected(category) {
    this.selectedCategory = category;
  }

  changeTab(tab) {
    this.selectedTab = tab.index;
  }


  ngOnInit() {
    return this.store.dispatch({ type: app.LOAD_DATA });
  }

}
