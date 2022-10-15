import {  of, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
   // const spy = jasmine.createSpyObj('HttpClient', { get: of({}) });
    const servicio=new MedicosService(null!);

    beforeEach( () => {
        componente=new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {
        const medicos=["medicos1", "medicos2", "medicos3"]
        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return of(medicos)
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    it("Debe de llamar al servidor para agregar un médico", ()=>{
       const espia= spyOn(servicio, 'agregarMedico').and.callFake(medico=>{
            return EMPTY;
        })
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });


    it("Debe de agregar un nuevo médico al arreglo de medicos", ()=>{
        const medico={id:1, nombre:"juan"};
        spyOn(servicio, 'agregarMedico').and.returnValue(of([medico]));
        componente.agregarMedico();
        expect(componente.medicos.findIndex(i=>i.id=medico.id)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servidor', ()=>{
        const miError="No se pudo agregar el médico";
        spyOn(servicio, 'agregarMedico').and
        .returnValue(throwError(()=>new Error(miError)));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    })

    it('Debe de llamar al servidor para borrar un medico',()=>{
        spyOn(window, 'confirm').and.returnValue(true);
        const espia=spyOn(servicio, "borrarMedico", ).and.returnValue(EMPTY);
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledOnceWith('1');
    })

    
    it('No Debe de llamar al servidor para borrar un medico',()=>{
        spyOn(window, 'confirm').and.returnValue(false);
        const espia=spyOn(servicio, "borrarMedico", ).and.returnValue(EMPTY);
        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledOnceWith('1');
    })



});
