import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';


import { environment } from '../../../environments/environment';


@Injectable()
export class AuthenticationService {
  private authenticated: boolean = false;
  private id: string = "";
  private apiUrl = `${environment.apiUrl}/auth`;
  private headers = new Headers({'Content-Type': 'application/json'});
  private socket;
  private url =  `${environment.apiUrl}`;

  constructor(private http: Http) {}

  login(username: string, password: string) {
      const url = `${this.apiUrl}/login/`;

      return this.http.post(url, JSON.stringify({ email: username, password: password }), {headers: this.headers})
          .map((response: Response) => {
              let resp = response.json();

              if(resp.success){
                this.authenticated = true;
                if (resp && resp.id_token) {
                  localStorage.setItem('id_token', resp.id_token);
                  
                  this.socket = io.connect(this.url);
                  this.id = resp.user._id;
                  return true;
                }
              }else{
                this.authenticated = false;
              }
               return false;
          });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('id_token');
      this.authenticated = false;
  }

  isAuthenticated() {
    if(this.authenticated){
      return true;
    }else{
      return false;
    }
  }

  getId() {
    return this.id;
  }
}
