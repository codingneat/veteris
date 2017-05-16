import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { go } from '@ngrx/router-store';

import { User } from '../../models/user';
import { ApiService } from '../../core/services';


@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8989/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http, private apiService: ApiService) { }

  getUsers() {
    return this.apiService.getObs('users')
    .map(response => response.json())
    .catch(this.handleError);
  }

  getUser(id: string): Promise<User> {
    const url = `users/findOne/${id}`;
    return this.apiService.get(url)
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `users/${user._id}`;
    return this.apiService
      .put(url, user)
      .then(() => user)
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
