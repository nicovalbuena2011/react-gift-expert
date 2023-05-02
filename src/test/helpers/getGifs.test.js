import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs',()=>{

    const category = 'Naruto';

    test('Debe de retornar un arreglo de gifs.', async ()=>{

        const gifs = await getGifs(category);
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });


    })
})