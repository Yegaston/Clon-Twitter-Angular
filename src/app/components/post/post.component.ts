import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public posts: any;
  public error: boolean;

  constructor(private postsService: PostsService) {
    this.error = false;
  }
  getPosts() {

    this.postsService.getAllPosts().subscribe(
      response => {
        this.posts = response;
      },
      error => {
        console.log(error);
        this.error = true;
      });
  }


  ngOnInit() {
    this.getPosts();
  }
}
