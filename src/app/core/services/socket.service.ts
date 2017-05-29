import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { AuthenticationService }    from '../services';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Injectable()
export class SocketService {
  // Our localhost address that we set in our server code
  private url =  `${environment.apiUrl}`;
  private socket;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

   sendMessage(message){
    this.socket.emit('add-message', message);   
  }
   getSocket() {
    let value = this.authenticationService.getId();
    this.socket = io.connect(this.url, { query:  {id: localStorage.getItem('id_user')} });
    this.socket.on("newTweet", (data) => console.log(data));
   }

   emitConnection(data) {
    this.socket = io.connect(this.url);
    this.socket.emit("connection", data);
   }
   
   savingWebpage() {
     let value = this.authenticationService.getId();
     this.socket = io.connect(this.url, { query:  {id:  localStorage.getItem('id_user')} });
     this.socket.on("savingWebpage", (data) => this.router.navigate(['/webpage', { id: data  }]));
   }
}