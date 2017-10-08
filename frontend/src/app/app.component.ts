import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  
  private navLinks = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngAfterContentInit(){
    console.log('content init');
  }

  ngOnInit() {
    this.auth.authState.subscribe(
      isLoggedIn => {
        if (!isLoggedIn)
          this.navLinks = [
            { title: 'Register', path: '/signup' },
            { title: 'Log in', path: '/signin' }
          ]
        else
          this.navLinks = [
            { title: 'Todo', path: '/todo' },
            { title: 'Log out', path: '/logout' }
          ]
      }
    )
  }
  
}
