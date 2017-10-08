import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private navLinks = [];

  constructor(private auth: AuthService) { }

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
