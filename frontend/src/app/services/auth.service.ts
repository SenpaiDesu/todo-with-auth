import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Credentials } from '../models/credentials.model';
import { 
  Router, 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService implements CanActivate {

  private baseUrl = 'http://localhost:2344/api';
  private emitter = new Subject<boolean>();
  private _authState = false;
  
  constructor(private http: Http, private router: Router) {

  }

  get authState(): Observable<boolean> {
    return this.emitter.asObservable();
  }

  emitAuthState(change: boolean) {
    this.emitter.next(change);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log(route);
    return this.isLoggedIn()
      .do(allowed => {
        this.emitAuthState(allowed);
        if (!allowed) 
          this.router.navigate(['/signin']);
      }); 
  }

  isLoggedIn(): Observable<boolean> {
    let headers = new Headers();
    headers.append('Authentication', localStorage.getItem('Authentication'));
    return this.http.get(`${this.baseUrl}/users/auth-state`, { headers })
      .map(res => res.json())
      .map(data => data.isLoggedIn)
      .share();
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
