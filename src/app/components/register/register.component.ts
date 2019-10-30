import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;

  constructor(private fb: FormBuilder) {
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
    // TODO: Use EventEmitter with form value
    console.log(this.registerFrom.value);
  }


  ngOnInit() {
  }


}
