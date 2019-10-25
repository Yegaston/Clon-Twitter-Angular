import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userToRegister = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    username: new FormControl('')
  });

  constructor() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userToRegister.value);
  }


  ngOnInit() {
  }


}
