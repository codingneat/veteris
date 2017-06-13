import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';


@Injectable()
export class SocketService {
  private url = `${environment.apiUrl}`;
  private socket: SocketIOClient.Socket;

  constructor(private router: Router) {
  }

  conectUser() {
    this.socket = io.connect(this.url, { query: { id: localStorage.getItem('id_user') } });

    let listener2 = Observable.fromEvent(this.socket, 'news');
    listener2.subscribe((payload) => {
    })
  }

  savingWebpage() {
    let listener = Observable.fromEvent(this.socket, 'savingWebpage');
    listener.subscribe((payload) => {
      this.router.navigate(['/webpage', { id: payload }]);
    })
  }
}