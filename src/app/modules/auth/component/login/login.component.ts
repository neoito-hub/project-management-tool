import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from 'src/app/core/auth/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatar = 'assets/images/img_avatar2.png';
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, public store: Store<any>) {}

  ngOnInit() {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //alert('Kidu');
    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: this.loginForm.value
    });
  }
}
