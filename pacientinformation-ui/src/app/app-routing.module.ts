import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PacientOverviewComponent} from "./Pages/Pacient/overview/pacient-overview.component";
import {PacientCreateComponent} from "./Pages/Pacient/create/pacient-create.component";
import {LoginComponent} from "./Pages/Login/login/login.component";
import {LogoutComponent} from "./Pages/logout/logout.component";


const routes: Routes = [
  { path: 'pacients', component: PacientOverviewComponent },
  { path: 'addPacient', component: PacientCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
