import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { go } from '@ngrx/router-store';

import { User } from '../../models/user';
import { ApiService } from '../../core/services';


@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private apiService: ApiService) { }

  getUsers() {
    return this.apiService
      .getObs('users')
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
    const url = `users`;
    return this.apiService
      .post(url, user)
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `users/${id}`;
    return this.apiService
      .delete(url)
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
