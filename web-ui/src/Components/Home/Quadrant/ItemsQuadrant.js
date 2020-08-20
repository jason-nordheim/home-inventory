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
          return {...i, checked: shouldBeChecked(i) }
        })
        setItems(mappedItems)
      })
  }

  /**
   * Determines if the items retrieved from the database should be checked 
   * by comparing to the items that were in the previous state 
   * @param {item} item 
   */
  const shouldBeChecked = item => {
    if(items !== null && items.length > 0) {
      items.forEach(i => {
        if(i.id === item.id && i.checked) {
          return true 
        }
      })
    }
    return false 
  }

  const setItemChecked = (id) => {
    const mappedItems = items.map(i => {
      if(i.id == id) {
        i.checked = !i.checked
        return i 
      }
      else return i 
    })
    setItems(mappedItems)
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

  const deleteSelected = () => {
    const selected_items = items.reduce(
      (acc, val) => (val.checked ? [...acc, val] : acc),
      []
    );
    selected_items.forEach((item) => {
      AuthActions.items.delete(item.id);
    });
    updateItems(); 
  }

  return (
    <Quadrant
      setShowFront={setShowFront}
      showFront={showFront}
      deleteSelected={deleteSelected}
      deleteDisabled={
        items.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0) === 0
      }
      title="Items"
      front={<ItemsFront items={items} setItemChecked={setItemChecked} />}
      back={<ItemsBack createNewItem={createNewItem} locations={locations} />}
    />
  );
};

export default ItemsQuadrant;
