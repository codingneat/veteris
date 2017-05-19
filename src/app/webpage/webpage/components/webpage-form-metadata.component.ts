import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums from '../../../config/enums/enums.actions';
import { Webpage } from '../../../models/webpage'
import { WebpageService } from '../../webpage.service';


@Component({
  selector: 'webpage-form-metadata ',
  templateUrl: './webpage-form-metadata.component.html',
  styleUrls: ['./webpage-form-metadata.component.styl']
})

export class WebpageFormMetadataComponent {
  @Input() webpage: any;
  webpageForm: Webpage = new Webpage();
  themes$: Observable<any[]>;
  categories$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private webpageService: WebpageService
  ) {
    this.categories$ = store.select(enums.getCategoriesState);
    this.themes$ = store.select(enums.getThemesState);
  }

  save() {
    this.webpageService.update(this.webpageForm);
  }


  ngOnChanges(...args: any[]) {
    if (args[0].webpage.currentValue._id != undefined) {
      this.webpageForm = { ...args[0].webpage.currentValue };
    }
  }
}
