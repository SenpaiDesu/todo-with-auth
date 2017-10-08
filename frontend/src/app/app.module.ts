import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { StoreModule } from '@ngrx/store';
import { 
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule
  ],
  providers: [
    AuthService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
