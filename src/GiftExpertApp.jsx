import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";



export const GiftExpertApp = () =>{

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const addCategory = (newCategory) => {
        //console.log(newCategory);
        //No utilizar el push en react
        
        //Validamos que no exista antes de insertarlo:
        const newArray = categories.map( element => element.toLocaleLowerCase() )
        if ( newArray.includes( newCategory.toLocaleLowerCase() ) ) return 

        //Insertamos en la lista.
        return setCategories( [...categories, newCategory ] )

        
    }


    return (
        <>  
            <h1>GiftExpertApp</h1>    
            <AddCategory
                onNewCategory = { (event) => addCategory(event) }
            />
            {
                categories.map( category =>  (           
                    <GiftGrid key={ category } category={ category }/>                      
                ))
            }            
        </>  
    );
}