import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { userRoles } from '../../../../shared/const-values';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  myForm;
  @Input()
  isEdit: boolean;
  @Input() set user(data) {
    if (data) {
      this.buildForm(data);
    }
  }
  roles = userRoles;
  @Output()
  formValue = new EventEmitter();
  value;
  submitFlag: boolean;
  constructor(private _fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    if (!this.isEdit) {
      this.myForm = this._fb.group({
        userId: '',
        email: ['', [Validators.required]],
        role: ['', [Validators.required]]
      });
    }
    if (this.isEdit) {
      this.submitFlag = true;
    } else {
      this.submitFlag = false;
    }
  }

  buildForm(userData) {
    this.myForm = this._fb.group({
      userId: userData.userId,
      email: [userData.email, [Validators.required, Validators.email]],
      role: [userData.role, [Validators.required]]
    });
  }

  onCancel() {
    this.router.navigate(['/users']);
  }
  get f() {
    return this.myForm.controls;
  }
  onSubmitUser() {
    this.submitFlag = true;
    this.value = this.myForm.value;
    if (this.myForm.valid) {
      this.formValue.emit(this.value);
    }
  }
}
