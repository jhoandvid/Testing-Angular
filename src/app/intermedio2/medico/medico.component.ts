import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',

})
export class MedicoComponent implements OnInit {

  medicos:any[]=[];

  constructor(public _medicoService:MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre:string){
    return `Hola ${nombre}`
  }

  obtenerMedicos(){
      this._medicoService.getMedico()
      .subscribe((medicos)=>this.medicos!=medicos)
  }

}
