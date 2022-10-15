import { usuarioIngresado } from './boolean';


describe("Pruebas de Boolean",()=>{

    it("debe de retorna un true",()=>{
        const  usuario=usuarioIngresado();
        expect(usuario).toBeTruthy();
        //expect(usuario).toBeFalsy();
       // expect(usuario).not.toBeTruthy();
    })

})