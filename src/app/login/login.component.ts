import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private avatar = require('../shared/images/img_avatar2.png');

  constructor() {}

  ngOnInit() {}
}
