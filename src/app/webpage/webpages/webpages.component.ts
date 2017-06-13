import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Webpage } from '../../models/webpage'
import { WebpageService } from '../webpage.service';


@Component({
  selector: 'webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.styl']
})

export class WebpagesComponent {
  @Input() webpages: any;
  p: any;

  constructor(
    private webpageService: WebpageService,
  ) { }
}
