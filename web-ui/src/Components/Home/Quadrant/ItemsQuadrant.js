import React, { useState, useContext, useEffect} from "react";
import Quadrant from "./Quadrant";
import { ItemsBack } from "./ItemsBack";
import { AuthorizationContext } from "../../../App";
import { ItemsFront } from './ItemsFront'

const ItemsQuadrant = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext);
  const [showFront, setShowFront] = useState(true);
  const [items, setItems] = useState([])
  const [locations, setLocations] = useState([])

  useEffect(() => {
    updateItems()
    getLocations()
  }, [showFront])

  const getLocations = () => {
    AuthActions.locations.getAll()
      .then(locations => setLocations(locations))
  }

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

  /**
   * Function to create a new item 
   * @param {string} name 
   * @param {number} est_value 
   * @param {number} acc_value 
   * @param {string} category 
   * @param {string} make 
   * @param {string} model 
   * @param {date} purchase_date 
   * @param {boolean} selling 
   * @param {number} location_id 
   */
  const createNewItem = (
    name,
    serial_number,
    notes,
    est_value,
    acc_value,
    category,
    make,
    model,
    purchase_date,
    selling,
    location_id
  ) => {
    AuthActions.items
      .create(
        name,
        serial_number,
        notes,
        est_value,
        acc_value,
        category,
        make,
        model,
        purchase_date,
        selling,
        location_id
      )
      .then(console.log);
  };

  return (
    <Quadrant
      setShowFront={setShowFront}
      showFront={showFront}
      title="Items"
      front={<ItemsFront items={items} setItemChecked={setItemChecked} />}
      back={<ItemsBack createNewItem={createNewItem} locations={locations} />}
    />
  );
};

export default ItemsQuadrant;
