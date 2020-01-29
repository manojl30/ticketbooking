import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

export function internalEmail(control:AbstractControl){ 
  let email:string = control.value;
  if(email.lastIndexOf("gmail.com") != -1){
        return null;
  }else{
      return {domain:true};
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logForm:FormGroup;
submitted=false;
constructor(private fb:FormBuilder,private router:Router) { }

ngOnInit() {
  this.logForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });
}

OnClick(email,password){
let eid=JSON.parse(localStorage.getItem("emailid"));

  let pwd=JSON.parse(localStorage.getItem("password"));
  
  if(email==eid && password==pwd){
    this.router.navigateByUrl('listrequest');
      }else{
    this.router.navigateByUrl('/');
  }
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

