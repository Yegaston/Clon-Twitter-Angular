import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.createForm();
  }

  createForm() {
    this.registerFrom = this.fb.group({
      email: [''],
      username: [''],
      password: [''],
      confirmPassword: ['']
    });
  }
  onClickSubmit() {

    const { username, email, password, confirmPassword } = this.registerFrom.value;
    const userToRegister: User = {
      username,
      email,
      password
    };
    const res = this.auth.registerUser(userToRegister);
    console.log(res);

    // TODO: Use EventEmitter with form value
    console.log(this.registerFrom.value);
  }


  ngOnInit() {
  }


}
