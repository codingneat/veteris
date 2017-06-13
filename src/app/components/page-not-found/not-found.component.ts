import { Component } from '@angular/core';


@Component({
  template: `<div fxLayout="row" fxLayoutAlign="center center" class="min-container">
              <div fxFlex="45" fxFlex.lt-sm="90%" >
                <h2 class="title center">Page not found</h2>
                <p class="center"><a class="app-title" [routerLink]="['/']">Go to Website</a></p>
              </div>
             </div>`
})
export class PageNotFoundComponent { }
