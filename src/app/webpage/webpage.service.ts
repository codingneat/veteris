import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';

import { Webpage } from '../models/webpage';
import * as fromRoot from '../app.reducer';
import * as webpages  from './webpage.actions';
import { ApiService } from '../core/services';


@Injectable()
export class WebpageService {
  private webpagesUrl = 'http://localhost:8989/webpages';
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(
    private http: Http,
    private apiService: ApiService,
    private store: Store<fromRoot.AppState> ) { 
      let authToken = localStorage.getItem('id_token');
      this.headers.append('Authorization', `Bearer ${authToken}`);
    }


  create(name: string): Promise<any> {
    return this.http
      .post(this.webpagesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(
      res => {
     //this.toasterService.pop('success', 'Success', 'Success 2');
        res.json();
      })
      .catch(res => {
     // this.toasterService.pop('danger', 'Error', 'Error 2');
        this.handleError;
      });
  }

  update(webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/${webpage._id}`;
    return this.http
      .put(url, JSON.stringify(webpage), { headers: this.headers })
      .toPromise()
      .then(
      res => {
        //this.toasterService.pop('success', 'Success', 'Success 2');
        this.store.dispatch(new webpages.updateWebpage(res.json()));
      })
      .catch(this.handleError);
  }

  updatePertinence(points: Number, webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/pertinence/${webpage._id}`;
    return this.http
      .put(url, { points: points }, { headers: this.headers })
      .toPromise()
      .then(
      res => {
       // this.toasterService.pop('success', 'Success', 'Success 3');
        this.store.dispatch(new webpages.updateWebpage(res.json()));
      })
      .catch(this.handleError);
  }

  updateGrade(grade: String, webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/grade/${webpage._id}`;
    return this.http
      .put(url, { grade: grade }, { headers: this.headers })
      .toPromise()
      .then(
      res => {
      //  this.toasterService.pop('success', 'Success', 'Success 3');
      this.store.dispatch(new webpages.updateWebpage(res.json()));
      })
      .catch(this.handleError);
  }

  updateFavourite(favourite: Boolean, webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/favourite/${webpage._id}`;
    return this.http
      .put(url, { favourite: favourite }, { headers: this.headers })
      .toPromise()
      .then(
      res => {
        //   this.toasterService.pop('success', 'Success', 'Success 3');
        this.store.dispatch(new webpages.updateWebpage(res.json()));
      })
      .catch(this.handleError);
  }

  addComment(comment: String, webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/addcomment/${webpage._id}`;
    return this.http
      .post(url, { comment: comment }, { headers: this.headers })
      .toPromise()
      .then(
      res => {
        //  this.http.pop('success', 'Success', 'Success 3');
        this.store.dispatch(new webpages.addComment(res.json()));
      })
      .catch(this.handleError);
  }

  addTag(tag: string, webpage: Webpage): Promise<any> {
    const url = `${this.webpagesUrl}/addtag/${webpage._id}`;
    return this.http
      .post(url, { tag: tag }, { headers: this.headers })
      .toPromise()
      .then(
      res => {
        //  this.http.pop('success', 'Success', 'Success 3');
        if(res.json() != 0) this.store.dispatch(new webpages.addTag(tag));
        
      })
      .catch(this.handleError);
  }


  getWebpage(id: string) {
    const url = `webpages/findOne/${id}`;
    return this.apiService.getObs(url)
      .map(resp => resp.json());
  }

  getLastWebpages() {
    const url = `webpages/last`;
    return this.apiService.getObs(url)
      .map(resp => resp.json());
  }

  searchWebsites(search: any): Promise<any> {
    const url = `${this.webpagesUrl}/search`;
    return this.http
      .post(url, JSON.stringify(search), { headers: this.headers })
      .toPromise()
      .then(
      res => {
        //   this.toasterService.pop('success', 'Success', 'Success 7');
        this.store.dispatch(new webpages.loadWebpagesSucceeded(res.json()));
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
