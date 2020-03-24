import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PacientOverviewComponent} from "./Pages/Pacient/overview/pacient-overview.component";
import {PacientCreateComponent} from "./Pages/Pacient/create/pacient-create.component";


const routes: Routes = [
  { path: 'pacients', component: PacientOverviewComponent },
  { path: 'addPacient', component: PacientCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
