import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resourceadd',
  templateUrl: './resource-add.component.html'
})
export class ResourceAddComponent implements OnInit {
  constructor(public store: Store<any>, private router: Router) {}

  ngOnInit() {}
}
