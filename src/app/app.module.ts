import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { TicketissueComponent } from './ticketissue/ticketissue.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { HttpClientModule} from '@angular/common/http';
import { DataTableModule} from 'ng-angular8-datatable';
import { LogheaderComponent } from './logheader/logheader.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    TicketrequestComponent,
    TicketissueComponent,
    ListrequestComponent,
    LogheaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
