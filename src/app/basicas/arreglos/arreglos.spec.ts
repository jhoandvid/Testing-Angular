import { obtenerRobots } from './arreglos';

describe("Prueba de arreglos",()=>{

    it("Debe de retornar al menos 3 robot",()=>{
        const res=obtenerRobots();

        expect(res.length).toBeGreaterThanOrEqual(3);
    })

    it("Debe de existir Megaman y Ultron",()=>{
        const resp=obtenerRobots();

        expect(resp).toContain('MegaMan')
        expect(resp).toContain('Ultron')
    })
})