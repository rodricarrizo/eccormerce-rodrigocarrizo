import React from 'react'
import ItemCounter from '../item-Counter/ItemCounter';

const Item = ({id , name , price , setSelectedItem , otherFunction}) => {
    const selectItem = () => setSelectedItem (name);
  return (
    <div>
        <h2>Nombre del producto : {name}</h2>
        <h2>Precio del producto : {price}</h2>
        <button onClick={selectItem }>Seleccionar producto </button>
        <button onClick={otherFunction }>Imprimir </button>
        <hr />
        <ItemCounter stock={15} />
    </div>
  )
}

export default Item
