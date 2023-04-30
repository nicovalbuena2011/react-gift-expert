import { useState } from "react"

export const AddCategory = ({ onNewCategory }) =>{
    //console.log(onNewCategory); //Recibe la funcion del otro componente

    //Utilizamos el hook useState para verificar en todo momento el estado que es lo que ingresa el ururario y lo mosifica
    const [ inputValue, setInputValue ] = useState(' ');

    const onInputChange = (event) =>{

        //console.log( event.target.value );
        setInputValue( event.target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();


        const value = inputValue.trim();

        if (value.length <= 1) return;

        onNewCategory( value );
        setInputValue('');

    }

    //console.log(categories);


    return(
        <form onSubmit={ (event) => onSubmit(event) } >
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={ inputValue }
                onChange={ onInputChange }
            
            />
        </form>
    )

}