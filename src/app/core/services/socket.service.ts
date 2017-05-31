import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { AuthenticationService } from '../services';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Injectable()
export class SocketService {
  // Our localhost address that we set in our server code
  private url = `${environment.apiUrl}`;
  private socket: SocketIOClient.Socket;

  constructor(private router: Router, private authenticationService: AuthenticationService) {


  }

  conectUser() {
    this.socket = io.connect(this.url, { path: '/veteris-api/socket.io', query: { id: localStorage.getItem('id_user') } });

    let listener2 = Observable.fromEvent(this.socket, 'news');
    listener2.subscribe((payload) => {
      console.log(payload);
    })
  }

  savingWebpage() {
    //this.socket = io.connect(environment.apiUrl, { path: '/veteris-api/socket.io', query: { id: localStorage.getItem('id_user') } });
    let listener = Observable.fromEvent(this.socket, 'savingWebpage');
    listener.subscribe((payload) => {
      console.log(payload);
      this.router.navigate(['/webpage', { id: payload }]);
    })
  }
}