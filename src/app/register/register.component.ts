import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:Loginvalidation[]=[
    {'firstname':''}

  ]
  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      firstname:['',Validators.required],
      username:['',Validators.required],
      emailid:['',Validators.required],
      orgname:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }


onsubmit(){
  let firstname = this.loginForm.get('firstname').value;
  let username = this.loginForm.get('username').value;
  let emailid = this.loginForm.get('emailid').value;
  let orgname = this.loginForm.get('orgname').value;
  let password = this.loginForm.get('password').value;
  let confirmpassword = this.loginForm.get('confirmpassword')
  let login:Loginvalidation ={'firstname':firstname,'username':username,'emailid':emailid,'orgname':orgname,'password':password,'confirmpassword':confirmpassword};
  this.
}
}