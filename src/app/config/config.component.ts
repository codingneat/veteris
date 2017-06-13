import { Component } from '@angular/core';


@Component({
  selector: 'app-config',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
   `,
})
export class ConfigComponent {
  constructor() {
  }
}
