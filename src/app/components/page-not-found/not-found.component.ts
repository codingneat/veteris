import { Component } from '@angular/core';

@Component({
  template: `<h2>Page not found <a [routerLink]="['/',{ outlets: { 'sidebar': ['aaabbb'] } }]">Open Message</a></h2>`
})
export class PageNotFoundComponent {}
