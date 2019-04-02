import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatar = 'assets/images/img_avatar2.png';
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert('Kidu');
  }
}
