import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiRoute = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  public getAllPosts() {
    return this.http.get(`http://localhost:3000/api/posts`);
  }
}
