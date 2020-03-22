import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PacientListComponent} from "./pacient-list/pacient-list.component";
import {PacientFormComponent} from "./pacient-form/pacient-form.component";


const routes: Routes = [
  { path: 'pacients', component: PacientListComponent },
  { path: 'addPacient', component: PacientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
