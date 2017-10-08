import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private credentials = {} as Credentials;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.auth.emitAuthState(true);
          this.router.navigate(['/todo']);
        }
        else 
          this.auth.emitAuthState(false);
      }
    );
  }

  onRegister(): void {
    this.auth.register(this.credentials)
      .subscribe(
        data => { 
          console.log(data);
          if (!data.success) 
            console.log(data.message);
          else {
            localStorage.setItem('Authentication', data.token);
            this.router.navigate(['/todo']);
          }
          
        }
      )
  }

}
