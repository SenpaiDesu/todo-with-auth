import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface Credentials {
  email: String,
  password: String,
  username?: String
}

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:2344/api';
  
  constructor(private http: Http) {

  }

  register(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, credentials)
      .map(res => res.json());
  }

  loginWithEmailAndPassword(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, credentials)
      .map(res => res.json());
  }

}
