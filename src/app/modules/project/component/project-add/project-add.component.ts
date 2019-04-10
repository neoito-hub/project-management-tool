import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  countries as listCountries,
  projectStatusList
} from '../../../../shared/const-values';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/project/models';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {
  myForm;
  @Input()
  isEdit: boolean;
  @Input() set project(data) {
    if (data) {
      this.buildForm(data);
    }
  }
  statusList = projectStatusList;
  countries = listCountries;
  @Output()
  formValue = new EventEmitter();
  value;

  constructor(private _fb: FormBuilder, private router: Router) {
    // this.myForm = this._fb.group({
    //   projectId: '',
    //   projectName: ['', [Validators.required]],
    //   clientName: ['', [Validators.required]],
    //   country: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   skypeId: ['', [Validators.required]],
    //   startDate: ['', [Validators.required]],
    //   status: ['', [Validators.required]]
    // });
  }

  ngOnInit() {
    if (!this.isEdit) {
      this.myForm = this._fb.group({
        projectId: '',
        projectName: ['', [Validators.required]],
        clientName: ['', [Validators.required]],
        country: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        skypeId: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        status: ['', [Validators.required]]
      });
    }
  }

  buildForm(projectData: Project) {
    this.myForm = this._fb.group({
      projectId: projectData.projectId,
      projectName: [projectData.projectName, [Validators.required]],
      clientName: [projectData.clientName, [Validators.required]],
      country: [projectData.country, [Validators.required]],
      email: [projectData.email, [Validators.required, Validators.email]],
      skypeId: [projectData.skypeId, [Validators.required]],
      startDate: [
        this.formatToDate(projectData.startDate),
        [Validators.required]
      ],
      status: [projectData.status, [Validators.required]]
    });
  }

  formatToTimestamp(formDate: string): any {
    console.log(formDate);
    let myDate = formDate.split('-');
    let newDate = myDate[0] + '/' + myDate[1] + '/' + myDate[2];
    console.log(myDate);
    return new Date(newDate).getTime();
  }
  formatToDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  onSubmit() {
    this.value = this.myForm.value;
    let formDate = this.value.startDate;
    let timestamp = this.formatToTimestamp(formDate);
    this.myForm.patchValue({ startDate: timestamp });

    this.value = this.myForm.value;
    this.formValue.emit(this.value);
  }
  onCancel() {
    this.router.navigate(['/projects']);
  }
}
