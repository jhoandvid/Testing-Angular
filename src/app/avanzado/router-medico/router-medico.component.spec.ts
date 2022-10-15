import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter{
  navigate(params:any){

  }
}

class FakeActivatedRoute {
  //params: Observable<any> = of({});

  //insertar valores a un observable
  private subject=new Subject();

  push(valor:any){
      this.subject.next(valor);
  }

  get params(){
    return this.subject.asObservable();
  }


}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[  { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  
  it('Debe de redireccionar a médico cuando se guarde', () => {

    const router=TestBed.inject(Router);
    const spy=spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);


  });

  it("Debe de colocar el id=nuevo",()=>{
    component=fixture.componentInstance;
    const activatedRoute:FakeActivatedRoute=TestBed.get(ActivatedRoute);
    activatedRoute.push({id:'nuevo'})

    expect(component.id).toBe('nuevo')


  })

});
