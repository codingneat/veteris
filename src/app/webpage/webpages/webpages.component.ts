import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Webpage } from '../../models/webpage'
import { WebpageService } from '../webpage.service';


@Component({
  selector: 'webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.styl']
})

export class WebpagesComponent implements OnInit, OnChanges {
  @Input() webpages: any;
  webpagesClone: any;
  offset: number = 0;
  limit: number = 12;

  constructor(
    private webpageService: WebpageService,
  ) {
  }

  ngOnInit() {
    this.cloneWebpages(this.offset, this.limit);
  }

  ngOnChanges() {
    this.cloneWebpages(this.offset, this.limit);
  }

  onPageChange(offset) {
    this.offset = offset;
    this.cloneWebpages(this.offset, this.limit);
  }

  cloneWebpages(offset: number, limit: number) {
    this.webpagesClone = this.webpages != undefined ? this.webpages.map(a => Object.assign({}, a)) : [];
    this.webpagesClone = this.webpagesClone.slice(this.offset, this.offset + this.limit);
  }
}
