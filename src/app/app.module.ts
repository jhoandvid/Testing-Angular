import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';
import { MedicosService } from './intermedio/espias/medicos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(RUTAS),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
