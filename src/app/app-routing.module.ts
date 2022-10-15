import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

const routes: Routes = [
  
  {
    path:'incrementador',
    component:IncrementadorComponent,
  },

  {
    path:'medicos',
    component:MedicosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
