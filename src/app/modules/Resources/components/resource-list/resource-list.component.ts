import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resourcelist',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  @Input()
  resources: any;
  constructor(public store: Store<any>, private router: Router) {}

  ngOnInit() {}
}
