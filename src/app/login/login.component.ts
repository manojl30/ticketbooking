import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logForm:FormGroup;
submitted=false;
constructor(private fb:FormBuilder) { }

ngOnInit() {
  this.logForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
}
onSubmit() {
  this.submitted = true;
  if (this.logForm.invalid) { 
    return;
  }
}
get email(){
  return this.logForm.get('email');
}
get password(){
  return this.logForm.get('password');
}
}

