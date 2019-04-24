import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  countries as listCountries,
  projectStatusList
} from '../../../../shared/const-values';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/project/models';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
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
  submitFlag: boolean;

  constructor(private _fb: FormBuilder, private router: Router) {}

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
    if (this.isEdit) {
      this.submitFlag = true;
    } else {
      this.submitFlag = false;
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
      startDate: [projectData.startDate, [Validators.required]],
      status: [projectData.status, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitFlag = true;
    this.value = this.myForm.value;
    if (this.myForm.valid) {
      this.formValue.emit(this.value);
    }
  }
  onCancel() {
    this.router.navigate(['/projects']);
  }
  get f() {
    return this.myForm.controls;
  }
}
