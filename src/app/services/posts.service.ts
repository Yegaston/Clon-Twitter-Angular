import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiRoute = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllPosts() {
    return this.http.get(`http://localhost:3000/api/posts`);
  }

  public postOnePost(body) {
    const token: string = this.authService.getTokenInLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };

    const post = { body };

    return this.http.post(`${this.apiRoute}post`, post, httpOptions);


  }
}
