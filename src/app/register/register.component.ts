import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.RegForm = this.fb.group({
      firstname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      orgname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    }, {
      validators: this.MustMatch('password', 'confirmpassword')
    });
   
  }
  MustMatch(controlName: string, matchcontrolName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[controlName];
      const matchcontrol = FormGroup.controls[matchcontrolName];
      if (matchcontrol.errors && !matchcontrol.errors.mustMatch) {
        return;
      }
      if (control.value !== matchcontrol.value) {
        matchcontrol.setErrors({ mustMatch: true });
      } else {
        matchcontrol.setErrors(null);
      }
    }
  }
  onRegister(emailid,password){
    localStorage.setItem("emailid",JSON.stringify(emailid.value)),
    localStorage.setItem("password",JSON.stringify(password.value))
  }

  


  // passwordValueValidator(control) {
  //   if (control.value != undefined) {
  //     if (!control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
  //       return { 'invalidPassword': true };
  //     }
  //     else{
  //       //here i need to add check for special characters
  // ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})

  //     }
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    if (this.RegForm.invalid) {
      return;
    }
  }

  get firstname() {
    return this.RegForm.get('firstname');
  }
  get username() {
    return this.RegForm.get('username');
  }
  get orgname() {
    return this.RegForm.get('orgname');
  }
  get emailid() {
    return this.RegForm.get('emailid');
  }
  get password() {
    return this.RegForm.get('password');
  }
  get confirmpassword() {
    return this.RegForm.get('confirmpassword');
  }
}