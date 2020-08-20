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

  /**
   * refreshes the items and locations whenever the 
   * card is flipped 
   */
  useEffect(() => {
    updateItems()
    getLocations()
  }, [showFront])

  /**
   * Retreives the location objects from te database 
   * and saves them to component state 
   */
  function getLocations(){
    AuthActions.locations.getAll()
      .then(locations => setLocations(locations))
  }

  /**
   * Refreshes the list of items displayed on the 
   * front of the quadrant, adding a checked property 
   * to keep in sync with the checkbox UI element displayed
   */
  function updateItems(){
    AuthActions.items.getAll()
      .then(data => {
        const mappedItems = data.map(i => {
          return {...i, checked: shouldBeChecked(i) }
        })
        setItems(mappedItems)
      })
  }

  /**
   * Determines if the items recieved from the database should be checked 
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

  /**
   * Utility function provided via props to children components 
   * that is called when the checkbox is selected, and toggles the 
   * checked property of the item with associatd ID in the displayed list 
   * @param {number} id 
   */
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
  function createNewItem(
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
  ){
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
  };

  /**
   * Reduces the items (from state) to just those with a checked 
   * property that returns true and then iterates over each object 
   * and sends delete request to the API 
   * 
   * Requests a list refresh upon completion
   */
  function deleteSelected(){
    const selected_items = items.reduce(
      (acc, val) => (val.checked ? [...acc, val] : acc),
      []
    );
    selected_items.forEach((item) => {
      AuthActions.items.delete(item.id);
    });
    updateItems(); 
  }

  /**
   * Handles the request to edit the selected 
   * list item 
   */
  function editSelected(){
    // todo 
  }

  /**
   * function called upon submission of the form 
   */
  function onSubmit(){
    console.log('submit')
    setShowFront(!showFront)
    updateItems()
  }

  /**
   * Used to determine which buttons should be enabled 
   * at any given time 
   */
  const num_checked = items.reduce(
    (acc, val) => (val.checked ? acc + 1 : acc),
    0
  );

  return (
    <Quadrant
      setShowFront={setShowFront}
      showFront={showFront}
      editSelected={editSelected}
      editDisabled={num_checked !== 1}
      deleteSelected={deleteSelected}
      deleteDisabled={num_checked === 0}
      onNewClick={() => setShowFront(!showFront)}
      title="Items"
      front={<ItemsFront items={items} setItemChecked={setItemChecked} />}
      back={<ItemsBack createNewItem={createNewItem} locations={locations} onSubmit={onSubmit} />}
    />
  );
};

export default ItemsQuadrant;
