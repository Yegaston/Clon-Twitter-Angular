import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.scss']
})
export class PostInputComponent implements OnInit {
  isShow = false;
  isAuth = true;
  constructor() { }

  ngOnInit() {
  }

  openPost() {
    this.isShow = !this.isShow;
  }
}
