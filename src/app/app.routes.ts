import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { PostListComponent } from './post-list/post-list.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  {path: 'todo',component: TodoComponent},
  {path: 'posts', component: PostListComponent},
  {path:'counter',component:CounterComponent}
];
