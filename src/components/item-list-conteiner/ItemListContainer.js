import React from 'react'
import Item from '../item/Item'
import { useState } from 'react';
const items = [ 
    { id : "1 " , name :  "Nike Air Max" , price : "37,200" },
    { id : "2 ", name : "Nike Air Force" , price : "27,200"  },
    { id : "3 " , name : "Nike Air Max 97" , price : "40,200"  },
];

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState (null);
    const otherFunction = () => {
        console.log ("otherFunction");
    }
  return (
    <div>
        <h1>Lista de Zapatillass</h1>
        <h3>Producto seleccionado</h3>
        <p>{selectedItem ? selectedItem : "ninguno"}</p>
        <hr />
       {items.map(({name , price , id} ) =>(
           <Item  
           key={id}
           id={id}
           name={name} 
           price={price} 
           setSelectedItem={setSelectedItem} 
           otherFunction={otherFunction}
           />
       ))}
      </div>
  )
}

export default ItemListContainer
