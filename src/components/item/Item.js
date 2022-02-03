import React from 'react'
import ItemCounter from '../item-Counter/ItemCounter';

const Item = ({id , name , price , stock, setSelectedItem , pictureURL }) => {
    const selectItem = () => setSelectedItem (name ,id ,price ,stock);
  return (
    <div>
        <h2>Nombre del producto : {name}</h2>
        <h2>Precio del producto : {price}</h2>
        <img src = {pictureURL} />
        <button onClick={selectItem }>Seleccionar producto </button>
        <ItemCounter stock={stock} />
        <hr/>
    </div>
  )
}

export default Item
