import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.scss']
})
export class PostInputComponent implements OnInit {
  isShow = false;
  isAuth = true;
  postForm: FormGroup;

  constructor(private postsService: PostsService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.postForm = this.fb.group({
      tweet: ['']
    });
  }

  testing() {

    if (this.postForm.value.tweet) {
      console.log(this.postForm.value.tweet);
      this.postsService.postOnePost(this.postForm.value.tweet).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    } else {
      console.log('Nope, body empty');
    }

  }

  openPost() {
    this.isShow = !this.isShow;
  }
}
