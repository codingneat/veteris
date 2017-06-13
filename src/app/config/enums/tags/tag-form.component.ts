import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../../models/tag';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums from '../enums.actions';
import { EnumsService } from '../enums.service';


@Component({
  selector: 'tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.styl']
})
export class TagFormComponent implements OnInit {
  @Input() tag: Tag;
  name: string;

  constructor(
    private store: Store<fromRoot.AppState>,
    private enumsService: EnumsService) {
  }

  save() {
    this.tag.name = this.name;
    if (!this.tag._id) {
      delete this.tag["_id"];
      this.enumsService.createTag(this.tag).then(x => this.store.dispatch(new enums.addTag(x)));
    } else {
      this.enumsService.updateTag(this.tag);
    }
    this.name = "";
  }

  ngOnChanges(...args: any[]) {
    this.name = args[0].tag.currentValue.name;
  }

  ngOnInit() {

  }
}
