import React from "react"
import ItemForm from '../../Forms/Item/ItemForm'


export const ItemsBack = ({ createNewItem, locations, onSubmit }) => {
  return <ItemForm createNewItem={createNewItem} locations={locations}  onSubmit={onSubmit} /> 
}

export default ItemsBack; 