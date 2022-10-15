

import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from '../../intermedio2/hospital/hospital.component';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';
import { IncrementadorComponent } from '../../intermedio2/incrementador/incrementador.component';
import { NgModule } from '@angular/core';
import { MedicosComponent } from 'src/app/intermedio/espias/medicos.component';




export const RUTAS:Routes=[
    {path: 'hospital', component:HospitalComponent},
    {path: 'medicos', component:MedicosComponent},
    {path: 'medico/:id', component:MedicoComponent},
    {path: '**', component: IncrementadorComponent }
]

@NgModule({
    imports: [RouterModule.forChild(RUTAS)],
    exports: [RouterModule]
})
export class routes {}