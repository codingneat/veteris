import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Webpage } from '../../../models/webpage'
import { WebpageService }  from '../../webpage.service';


@Component({
  selector: 'webpage-comments ',
  templateUrl: './webpage-comments.component.html',
  styleUrls: [ './webpage-comments.component.styl' ]
})

export class WebpageCommentsComponent{
  @Input() webpage: any;
  comment: string;

  constructor(
      private webpageService: WebpageService, 
  ) {}

  save() {
     this.webpageService.addComment(this.comment, this.webpage);
  }
}
