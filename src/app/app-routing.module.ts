import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegComponent } from './reg/reg.component';


const routes: Routes = [
  {path:"", component: RegComponent},
  {path: "login", component: LoginComponent},
  {path:"dash", component: DashboardComponent, canActivate: [AuthGuard]
},
  {path:"reg", component: RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
