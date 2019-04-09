import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail-component',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  constructor(public _store: Store<any>, private router: Router) {}
  ngOnInit() {}
}
