import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/';

  private user: any;
  constructor(private http: HttpClient, private router: Router) { }

  public registerUser(userToRegister: User) {
    this.http.post(`${this.apiUrl}/register`, userToRegister).subscribe(
      response => {
        console.log(response);
        this.saveTokenInLocalStorage(response);
        this.router.navigate(['/']);
        return { ok: 'Done!. Thanks for you sign up :D' };
      },
      error => {
        console.log(error);
        return { error: 'Check if this form is correctly' };
      });
  }

  public loginUser(userToRegister: User) {
    this.http.post(`${this.apiUrl}/login`, userToRegister).subscribe(
      response => {
        console.log(response);
        this.saveTokenInLocalStorage(response);
        this.router.navigate(['/']);
        return { ok: 'Done!. You are login' };
      },
      error => {
        console.log(error);
        return { ...error.error };
      });
  }


  private saveTokenInLocalStorage(user) {
    const { token } = user;
    localStorage.setItem('token', `Bearer ${token}`);
  }

  public getTokenInLocalStorage() {
    return localStorage.getItem('token');
  }

  public decodedToken(token: string) {
    return jwt_decode(token);
  }

}
