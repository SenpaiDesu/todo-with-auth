import { Routes } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';


export const routes : Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/todo' }
]

