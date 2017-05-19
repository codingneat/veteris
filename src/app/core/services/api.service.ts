import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';


@Injectable()
export class ApiService {
    private apiUrl = `${environment.apiUrl}`;

    constructor(private http: Http) {
    }

    get(endpoint: string) {
        const url = `${this.apiUrl}/${endpoint}`;
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options)
            .toPromise();
    }

    getObs(endpoint: string) {
        const url = `${this.apiUrl}/${endpoint}`;
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options);
    }

    post(endpoint: string) {
        const url = `${this.apiUrl}/${endpoint}`;
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, options)
            .toPromise();
    }

    put(endpoint: string, body: any) {
        const url = `${this.apiUrl}/${endpoint}`;
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.put(url, body, options)
            .toPromise();
    }

    delete(endpoint: string, body: any) {
        const url = `${this.apiUrl}/${endpoint}`;
        let authToken = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(url, options)
            .toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
