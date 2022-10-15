import { Jugador } from './clase';
describe("Pruebas de clase", ()=>{

    let jugador=new Jugador();

    //Antes que todas
        //beforeAll();

    //antes que cada una
        //beforeEach();

    //Despues de todas
        //afterAll()

    //Despues de cada
        //afterEach()

    beforeAll(()=>{
        //console.log('beforeAll')
    });
    beforeEach(()=>{
        //jugador.hp=100;
        jugador=new Jugador();
    });
    afterAll(()=>{
        //console.log('afterAll')
    });
    afterEach(()=>{
        //console.log('afterEach')
    });

    it("Debe de retornar 80 de hp si recibe 20 de daño",()=>{
       // const jugador= new Jugador();
       
        const respuesta=jugador.recibeDanio(20);
        expect(respuesta).toBe(80);

    });

   it("Debe de retornar 30 de hp si recibe 50 de daño",()=>{
        //const jugador= new Jugador();
        const respuesta=jugador.recibeDanio(50);
        expect(respuesta).toBe(50);

    }); 

    it("Debe de retornar 0 de hp, si recibe 100 de daño",()=>{
        //const jugador= new Jugador();
        const respuesta=jugador.recibeDanio(100);
        expect(respuesta).toBe(0);

    }); 
})