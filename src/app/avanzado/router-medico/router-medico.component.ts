import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
})
export class RouterMedicoComponent implements OnInit {

  id:string | undefined;

  constructor(public router:Router, public activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params=>{
      this.id=params['id'];
    })
  }

  guardarMedico(){
    this.router.navigate(['medico','123']);
  }

}
