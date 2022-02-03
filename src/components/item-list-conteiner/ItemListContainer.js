import React, { useEffect } from 'react'
import { useState } from 'react';
import {itemsApi} from "../Promises/promises";
import { ItemList } from './itemList';


const ItemListContainer = () => {
    const [products , setProducts] = useState ( [] ) ;
    const [loading ,setLoading] = useState (true);
    useEffect (()=> {
      getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const result = await itemsApi;
            setProducts (result);
        } catch (error) {
            console.log ({error });
        } finally {
            setLoading(false);
            console.log ("finalizacion del consumo");
        }
    };
    if (loading) {
        return <h1>Cargando..</h1>;
    }
return (
<ItemList items={products}/>
)
}

export default ItemListContainer
