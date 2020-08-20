import React from "react";
import { List } from "@material-ui/core";
import ItemListItem from '../../../Components/ItemListItem'

export const ItemsFront = ({ items, setItemChecked }) => {
  return <List>{items.map( i => {
    return <ItemListItem key={i.id} item={i} setItemChecked={setItemChecked}  /> 
  })}</List>;
};
