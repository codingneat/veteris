import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Theme } from '../../models/theme';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';
import { ApiService } from '../../core/services';


@Injectable()
export class EnumsService {
  private themesUrl = 'http://localhost:8989/themes';
  private tagUrl = 'http://localhost:8989/tags';
  private categoryUrl = 'http://localhost:8989/categories';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private apiService: ApiService) { 
   let authToken = localStorage.getItem('id_token');
   this.headers.append('Authorization', `Bearer ${authToken}`);
  }

  getThemes() {
    return this.apiService.getObs('themes')
      .map(resp => resp.json());
  }

  createTheme(theme: Theme): Promise<Theme> {
    return this.http
      .post(this.themesUrl, JSON.stringify(theme), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateTheme(theme: Theme): Promise<Theme> {
    const url = `themes/${theme._id}`;
    return this.apiService
      .put(url, JSON.stringify(theme))
      .then(() => theme)
      .catch(this.handleError);
  }

  deleteTheme(id: string): Promise<void> {
    const url = `themes/${id}`;
    return this.apiService
      .delete(url, { headers: this.headers })
      .then(() => null)
      .catch(this.handleError);
  }


  getTags() {
    return this.apiService.getObs('tags')
      .map(resp => resp.json());
  }

  createTag(tag: Tag): Promise<Tag> {
    return this.http
      .post(this.tagUrl, JSON.stringify(tag), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateTag(tag: Tag): Promise<Tag> {
    const url = `tags/${tag._id}`;
    return this.apiService
      .put(url, JSON.stringify(tag))
      .then(() => tag)
      .catch(this.handleError);
  }

  deleteTag(id: string): Promise<void> {
    const url = `tags/${id}`;
    return this.apiService
      .delete(url, { headers: this.headers })
      .then(() => null)
      .catch(this.handleError);

  }


  getCategories() {
    return this.apiService.getObs('categories')
      .map(resp => resp.json());
  }

  createCategory(category: Category): Promise<Category> {
    return this.http
      .post(this.categoryUrl, JSON.stringify(category), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateCategory(category: Category): Promise<Category> {
    const url = `categories/${category._id}`;
    return this.apiService
      .put(url, JSON.stringify(category))
      .then(() => category)
      .catch(this.handleError);
  }

  deleteCategory(id: string): Promise<void> {
    const url = `categories/${id}`;
    return this.apiService
      .delete(url, { headers: this.headers })
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
