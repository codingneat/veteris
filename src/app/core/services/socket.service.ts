import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { AuthenticationService }    from '../services';
import { Router } from '@angular/router';

@Injectable()
export class SocketService {
  // Our localhost address that we set in our server code
  private url = 'http://104.236.215.185:8989'; 
  private socket;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

   sendMessage(message){
                  // Make sure the "add-message" is written here because this is referenced in on() in our server
    this.socket.emit('add-message', message);   
  }
   getSocket() {
    let value = this.authenticationService.getId();
    this.socket = io.connect(this.url, { query:  {id: value} });
    this.socket.on("newTweet", (data) => console.log(data));
   }

   emitConnection(data) {
    this.socket = io.connect(this.url);
    this.socket.emit("connection", data);
   }
   
   savingWebpage() {
     let value = this.authenticationService.getId();
     this.socket = io.connect(this.url, { query:  {id: value} });
     this.socket.on("savingWebpage", (data) => this.router.navigate(['/webpage', { id: data  }]));
   }
}