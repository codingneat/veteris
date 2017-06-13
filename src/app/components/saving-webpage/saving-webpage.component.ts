import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../core/services';


@Component({
  selector: 'saving-webpage',
  templateUrl: './saving-webpage.component.html',
  styleUrls: ['./saving-webpage.component.styl']
})
export class SavingWebpageComponent {

  constructor(
    private router: Router,
    private socketService: SocketService) {
  }

  ngOnInit() {
    this.webpageSent();
  }

  webpageSent() {
    return this.socketService.savingWebpage();
  }

}
