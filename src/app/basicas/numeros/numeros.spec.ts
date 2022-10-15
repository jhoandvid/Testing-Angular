import { incrementador } from './numeros';

describe('Prueba de numeros', ()=>{

    it('Debe de retornar 100 si el numero ingresado es mayor a 100', ()=>{
        const resp=incrementador(300);
        expect(resp).toBe(100);
    });

    it(`Debe de retornar un numero ingresado +1, si es mayor a 100`, ()=>{
        const resp=incrementador(50);
        expect(resp).toBe(50+1)
    });
})