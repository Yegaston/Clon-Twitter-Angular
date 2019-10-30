import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  onClickSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
  }


  ngOnInit() {
  }

}

