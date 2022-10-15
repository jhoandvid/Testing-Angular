//describe('Pruebas de String',);
//it('Debe de regresar un string',);

import { mensaje } from "./string";

describe('Prueba de strings', ()=>{

    it('Debe de regresar un string', ()=>{

        //ToBe Debe de ser igual a : la respuesta debe de ser un string
        const respuesta=mensaje('Fernando', 12);
        expect(typeof respuesta).toBe('string');
    })

    it('Debe de retornar un saludo con el nombre enviado', ()=>{
        //la respuesta debe de tener el nombre
        const nombre="juan"
        const respuesta=mensaje(nombre, 12);
        expect(respuesta).toContain(nombre);
    })



    it('El String debe de tener un numero',()=>{
        const numero=12
        const respuesta=mensaje('fernando', numero);
        expect(respuesta).toContain(numero.toString());

    })

});