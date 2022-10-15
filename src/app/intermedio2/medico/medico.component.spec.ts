import {TestBed, ComponentFixture} from '@angular/core/testing'
import { MedicosComponent } from '../../intermedio/espias/medicos.component';

import{MedicoComponent} from './medico.component'
import { MedicoService } from './medico.service';
import {  HttpClientModule } from '@angular/common/http';



describe('Medico Component', ()=>{

   

    let component:MedicoComponent;
    let fixture:ComponentFixture<MedicoComponent>

    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations:[MedicosComponent],
            providers:[MedicoService],
            imports:[HttpClientModule]
        });

        fixture=TestBed.createComponent(MedicoComponent);
        component=fixture.componentInstance;
    });

    it("Debe de crearse el componente", ()=>{

        expect(component).toBeTruthy();

    });

    it('Debe de retornar el nombre del medico',()=>{
        const nombre='Juan';

        const resp=component.saludarMedico(nombre);

        expect(resp).toContain(nombre);
    })


})

