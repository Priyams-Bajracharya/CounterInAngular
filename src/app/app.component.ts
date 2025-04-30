import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { PostListComponent } from "./post-list/post-list.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TodoComponent, PostListComponent,CounterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';
  
}
