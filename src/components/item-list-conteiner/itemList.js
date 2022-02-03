import { useState } from "react";
import Item from "../item/Item" ;
export const ItemList=({items}) => {

    const [selectedItem, setSelectedItem] = useState (null);
    return (
        <div>
            <h1>Lista de Zapatillass</h1>
            <h3>Producto seleccionado</h3>
            <p>{selectedItem ? selectedItem : "ninguno"}</p>
            <hr />
           {items.map((product) =>(
               <Item  
               key={product.id}  {...product}
               
               setSelectedItem={setSelectedItem} 
               
               />
           ))}
          </div>
      )
}