import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resourceaddcontainer',
  templateUrl: './resource-add.component.html'
})
export class ResourceAddContainerComponent implements OnInit {
  constructor(public store: Store<any>, private router: Router) {}

  ngOnInit() {}
}
