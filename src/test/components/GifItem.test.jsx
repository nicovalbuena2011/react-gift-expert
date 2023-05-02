import {fireEvent, render, screen } from "@testing-library/react";
import { GiftItem } from '../../components/GifItem'

describe('Prueba en el componente GifItem ', () =>{

    const titulo = 'Naruto';
    const url = 'https://localhost/url';

    test('Debe tener el titulo y la url obligatoria. se compara con el snapshot ', ()=>{

        const { container  } = render( <GiftItem title = { titulo } url = {url} /> )
        expect( container ).toMatchSnapshot();
        

    });

    test('Debe de mostrar la imagen con el url y el alt indicado', ()=>{
        render( <GiftItem title = { titulo } url = {url} /> )
        //screen.debug(); //Muestra el componente renderizados
        const { src, alt } = screen.getByRole('img'); //Seleccionamos la imagen
        //console.log(src,alt);
        expect( src ).toBe( url );
        expect( alt ).toBe( titulo );


    });


});