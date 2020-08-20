import React, { useState, useContext, useEffect} from "react";
import Quadrant from "./Quadrant";
import { ItemsBack } from "./ItemsBack";
import { AuthorizationContext } from "../../../App";
import { ItemsFront } from './ItemsFront'

const ItemsQuadrant = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext);
  const [showFront, setShowFront] = useState(true);
  const [items, setItems] = useState([])

  useEffect(() => {
    updateItems()
  }, [showFront])

  const updateItems = () => {
    AuthActions.items.getAll()
      .then(data => {
        console.log('items', data)
        const mappedItems = data.map(i => {
          return {...i, checked: setItemChecked(i) }
        })
        setItems(mappedItems)
      })
  }

  const setItemChecked = item => {
    if(items !== null && items.length > 0) {
      items.forEach(i => {
        if(i.id === item.id && i.checked) {
          return true 
        }
      })
    }
    return false 
  }

  return (
    <Quadrant
      setShowFront={setShowFront}
      showFront={showFront}
      title="Items"
      front={<ItemsFront />}
      back={<ItemsBack />}
    />
  );
};

export default ItemsQuadrant;
