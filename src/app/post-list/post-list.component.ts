import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: any[] =[];

  constructor(private postService: PostService){

  }
  ngOnInit(){
    this.loadPosts();
  }

  loadPosts(){
    this.postService.getPosts().subscribe((data)=>{
      this.posts = data;
    });
  }

}
