import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { TicketissueComponent } from './ticketissue/ticketissue.component';
import { ListrequestComponent } from './listrequest/listrequest.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'ticketrequest',
    component:TicketrequestComponent
  },
  {
    path:'ticketissue',
    component:TicketissueComponent
  },
  {
    path:'listrequest',
    component:ListrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
