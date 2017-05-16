import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
  private authenticated: boolean = false;
  private id: string = "";
  private apiUrl = `${environment.apiUrl}/auth`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
     //localStorage.setItem('id_token', "resp.id_token");
  }

  login(payload: any) {
      const url = `${this.apiUrl}/login/`;

      return this.http.post(url, JSON.stringify({ email: payload.email, password: payload.password }), {headers: this.headers})
          .map((response: Response) => {
              let resp = response.json();

              if(resp.success){
                this.authenticated = true;
                if (resp && resp.id_token) {
                  localStorage.setItem('id_token', resp.id_token);
                  this.id = resp.user._id;
                  return true;
                }
              }
              this.authenticated = false;
              return false;
          });
  }

  logout() {
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
