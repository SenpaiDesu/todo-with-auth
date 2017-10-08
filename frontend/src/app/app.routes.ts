import { Routes } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { AuthService } from './services/auth.service';


export const routes : Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'todo', component: TodoListComponent, canActivate: [AuthService] },
  { path: '', pathMatch: 'full', redirectTo: '/signin' }
]

