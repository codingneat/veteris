import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Webpage } from '../../../models/webpage'
import { WebpageService }  from '../../webpage.service';


@Component({
  selector: 'webpage-form-metadata ',
  templateUrl: './webpage-form-metadata.component.html',
  styleUrls: [ './webpage-form-metadata.component.scss' ]
})

export class WebpageFormMetadataComponent{
  @Input() webpage: any;
  webpageForm: Webpage = new Webpage();

/*
  @select(['enums', 'themes', 'items']) readonly themes$: Observable<any[]>;
  @select(['enums', 'categories', 'items']) readonly categories$: Observable<any[]>; */

  constructor(
      private webpageService: WebpageService, 
  ) {}

  save() {
    //const userSubmit:User = this.prepareSaveUser();
     this.webpageService.update(this.webpageForm);
  }


  ngOnChanges(...args: any[]) {
    if(args[0].webpage.currentValue._id != undefined) {
      this.webpageForm = { ...args[0].webpage.currentValue };
    }
  }


}
