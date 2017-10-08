import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  baseUrl = 'http://localhost:2344/api';

  constructor(private http: Http) { }

  private attachToken(): Headers {
    let headers = new Headers();
    let token = localStorage.getItem('Authentication');
    headers.append('Authentication', token);
    return headers;
  }

  addItem(text: String): Observable<any> {
    let headers = this.attachToken();
    return this.http.post(`${this.baseUrl}/todos`, { text }, { headers })
      .map(res => res.json());
  }

  getList(): Observable<any> {
    let headers = this.attachToken();
    return this.http.get(`${this.baseUrl}/todos`, { headers })
      .map(res => res.json());
  }

  deleteItem(id): Observable<any> {
    let headers = this.attachToken();
    return this.http.delete(`${this.baseUrl}/todos/${id}`, { headers })
      .map(res => res.json());
  } 

}
