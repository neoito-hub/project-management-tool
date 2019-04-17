import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  @Input()
  projects: any;
  status = ['In Progress', 'On Hold', 'Completed', 'Closed'];
  constructor() {}

  ngOnInit() {}
}
