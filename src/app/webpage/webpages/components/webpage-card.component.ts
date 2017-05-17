import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Webpage } from '../../../models/webpage'
import { WebpageService }  from '../../webpage.service';


@Component({
  selector: 'webpage-card',
  templateUrl: './webpage-card.component.html',
  styleUrls: [ './webpage-card.component.scss' ]
})

export class WebpageCardComponent{
  @Input() webpage: any;

  constructor(
      private webpageService: WebpageService, 
      private router: Router
  ) {}

  goToWebpage() {
    let link = ['/webpage', { id: this.webpage._id}];
    this.router.navigate(link);
  }


  

}
