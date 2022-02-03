import React , { useState } from "react" ;


const ItemCounter = ({ stock }) => {
    const [counter , setCounter] = useState (0);
    const [currentTimes , setCurrenTimes] = useState (0);
    const [currentDate , setCurrentDate] = useState ("");
    
    const minusCounter = () => {
        if (counter <= 0 ) return;
        setCounter(counter - 1);
    };
    const plusCounter = () => {
        if (counter >= stock ) return;
       setCounter (counter + 1);
    };
    const takeMe = () => {
    
    };

  return (
      <>
    <div>
        <h3>Compras = {currentTimes}</h3>
        <h3> {currentDate} </h3>
        <button onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button onClick={plusCounter}>+</button>

      
    </div>
    <button onClick={takeMe}>Comprar</button>
    </>
  );
};

export default ItemCounter;
