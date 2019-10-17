import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    const posts = this.postsService.getAllPosts();
    console.log(posts);
  }

}
