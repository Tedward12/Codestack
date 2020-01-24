import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;


  get fName() { return this.userForm.get('fName'); }
  get lName() { return this.userForm.get('lName'); }
  get mName() { return this.userForm.get('mName'); }
  get passwordGroup() { return this.userForm.get('passwordGroup'); }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    // this.userForm = new FormGroup({
    //   fName: new FormControl('', Validators.required),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   mName: new FormControl('', Validators.required),
    //   hasMiddleName: new FormControl(false)
    // });

    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      mName: ['', Validators.required],
      passwordGroup: this.formBuilder.group({
        password: null,
        confirmPassword: null
      }, {validator: this.passwordMatch}),
      hasMiddleName: false
    });

    this.userForm.get('hasMiddleName').valueChanges.subscribe(val => {
      const control = this.userForm.get('mName');
      if (val) {
        control.clearValidators();
      } else {
        control.setValidators(Validators.required);
      }
      control.updateValueAndValidity();
    });
  }

  setValue() {
    this.userForm.setValue({
      fName: 'Trever',
      lName: 'Edwards',
      mName: 'David Lee',
      hasMiddleName: false
    });
  }

  patchValue() {
    this.userForm.patchValue({
      fName: 'Casey'
    });
  }

  submitForm() {
    if(this.userForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      this.userForm.reset();
      console.log(this.userForm.value);
    }
  }
  passwordMatch(c: AbstractControl): {[key: string]: boolean} | null {
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
    if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
      return { 'mismatch': true};
    }
    return null;
  }
}
