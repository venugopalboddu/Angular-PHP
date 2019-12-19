import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OutComponent } from './out/out.component';
import { AuthGuard } from './auth.guard';
import { RegComponent } from './reg/reg.component';
import { JobComponent } from './job/job.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    OutComponent,
    RegComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
