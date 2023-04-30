import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiftItem } from "./GifItem";


export const GiftGrid = ({ category }) =>{

    const [ images, setImages ] = useState([]);

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages( newImages );
        
    }
    
    //Este hook hace que se llame la funcion una unica vez cada que se vuelve a renderizar el componente.
    //El [  ], indica la condicion para que se dispare el evento, en este caso cuando se renderice el 
    //Componente.
    useEffect( ()=>{
        getImages();
    }, [] );
    

    return(
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {   
                    images.map( ( images ) =>  (           
                        <GiftItem 
                            key = {images.id}
                            {...images} //Le manda toda la informacion de las images en el useState.
                        />                      
                    ))
                }       
            </div>
         
        </>
    )


}