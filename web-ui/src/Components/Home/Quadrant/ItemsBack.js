import React from "react"
import ItemForm from '../../Forms/Item/ItemForm'


export const ItemsBack = ({ createNewItem, locations }) => {
  return <ItemForm createNewItem={createNewItem} locations={locations} /> 
}

export default ItemsBack; 