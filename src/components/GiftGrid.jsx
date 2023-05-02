import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiftItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GiftGrid = ({ category }) =>{

    //console.log( category );
    //Custom hook
    const { images, isLoading } = useFetchGifs( category ); 

    return(
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2> Cargando </h2> )
            }

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