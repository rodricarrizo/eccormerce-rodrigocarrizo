import React from 'react'

const Item = ({id , name , price , setSelectedItem , otherFunction}) => {
    const selectItem = () => setSelectedItem (name);
  return (
    <div>
        <h2>Nombre del producto : {name}</h2>
        <h2>Precio del producto : {price}</h2>
        <button onClick={selectItem }>Seleccionar producto </button>
        <button onClick={otherFunction }>Imprimir </button>
        <hr />
    </div>
  )
}

export default Item
