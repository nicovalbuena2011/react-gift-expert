import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) =>{


    const [ images, setImages ] = useState([]);

    const [ isLoading, setIsLoading ] = useState( true );

    

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
        
    }
    
    //Este hook hace que se llame la funcion una unica vez cada que se vuelve a renderizar el componente.
    //El [  ], indica la condicion para que se dispare el evento, en este caso cuando se renderice el 
    //Componente.
    useEffect( ()=>{
        getImages();
    }, [] );


    return({
        images: images,
        isLoading: isLoading,
    })

};