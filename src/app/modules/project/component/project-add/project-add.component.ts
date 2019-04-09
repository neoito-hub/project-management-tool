import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {
  myForm;
  statusList = projectStatusList;
  countries = listCountries;
  @Output()
  formValue = new EventEmitter();
  value;

  constructor(private _fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      id: '',
      projectName: '',
      clientName: '',
      country: '',
      email: '',
      skypeId: '',
      startDate: '',
      status: ''
    });
  }
  convertDateToSeconds(formDate: string): any {
    let myDate = formDate.split('-');
    let newDate = myDate[0] + '/' + myDate[1] + '/' + myDate[2];
    console.log(myDate);
    let timestamp = new Date(newDate).getTime();
    console.log(timestamp);
    //alert(timestamp);
    timestamp = timestamp / 1000;
    return JSON.parse(`{ "seconds": ${timestamp}, "nanoseconds": "" }`);
  }
  onSubmit() {
    this.value = this.myForm.value;
    let formDate = this.value.startDate;
    let timestampObj = this.convertDateToSeconds(formDate);
    this.myForm.patchValue({ startDate: timestampObj });

    this.value = this.myForm.value;
    this.formValue.emit(this.value);
  }
  onCancel() {
    this.router.navigate(['/projects']);
  }
}
