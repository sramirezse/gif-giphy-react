import { getGifs } from "../../helpers/GetGifs";

describe('Pruebas con getGifs fetch', ()=>{
    test('debe traer 10 datos por consulta', async()=>{
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    });

    test('debe traer 10 datos por consulta', async()=>{
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});