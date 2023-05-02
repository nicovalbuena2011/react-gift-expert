import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas en el componente AddCategory', ()=>{

    test(' Debe de cambiar el valor de la caja de texto ',()=>{

        render( <AddCategory onNewCategory={ ()=>{  } } /> )
        const input = screen.getByRole('textbox');
        //screen.debug();
        fireEvent.input( input, { target:{ value: 'Saitama'} } );
        expect( input.value ).toBe('Saitama');


    });
});