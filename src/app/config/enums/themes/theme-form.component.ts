import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../enums.actions';
import { EnumsService }  from '../enums.service';

@Component({
  selector: 'theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent implements OnInit  {
  @Input() theme: Theme;
  name: string;

  constructor(
    private store: Store<fromRoot.AppState>, 
    private enumsService: EnumsService) {
  }

  save() {
    this.theme.name = this.name;
    if(!this.theme._id) {
      delete this.theme["_id"];
      this.enumsService.createTheme(this.theme).then(x => this.store.dispatch(new enums.addTheme(x)));
    }else{
      this.enumsService.updateTheme(this.theme);
    }
    this.name = "";
  }

  ngOnChanges(...args: any[]) {
    this.name = args[0].theme.currentValue.name;
  }

  ngOnInit() {
   
  }

}
