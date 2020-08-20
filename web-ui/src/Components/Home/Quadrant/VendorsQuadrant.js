import React, { useState, useContext, useEffect } from "react";
import { List } from "@material-ui/core";
import Quadrant from "./Quadrant";
import VendorsFront from "./VendorsFront";
import { AuthorizationContext } from "../../../App";
import { VendorsBack } from "./VendorsBack";

const VendorsQuadrant = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext);
  const [showFront, setShowFront] = useState(true);
  const [vendors, setVendors] = useState([]);

  /**
   * tasks to be executed upon the component loading 
   */
  useEffect(() => {
    updatedVendorList();
  }, [showFront]);

  /**
   * Makes call to the database to fetch all the vendors created 
   * by the currently authenticated user. 
   * 
   * Upon recieving vendor list, the vendor objects recieve 
   * a checked property which will be used to keep track of 
   * which vendors are checked within the list 
   */
  function updatedVendorList(){
    AuthActions.vendors.getAll().then((data) => {
      if (data.iid === undefined) {
        // data is valid
        const mappedData = data.map((vendor) => {
          return { ...vendor, checked: shouldBeChecked(vendor) };
        });
        setVendors(mappedData);
      }
    });
  };

  /**
   * Determines if the vendor object provided to the function 
   * should be checked by comparing to the previous state. 
   * @param {vendor} vendor 
   */
  const shouldBeChecked = (vendor) => {
    if (vendors !== null && vendors !== []) {
      // should be checked if it already was in previous load
      vendors.forEach((v) => {
        if (v.id === vendor.id && v.checked) {
          return true;
        }
      });
    }
    return false; // default to not checked
  };

  /**
   * Toggles the checked property of the checkbox 
   * @param {number} id 
   */
  const setChecked = (id) => {
    const mappedVendors = vendors.map((v) => {
      if (v.id === id) {
        v.checked = !v.checked
        return v; 
      }
      else return v;
    });
    setVendors(mappedVendors);
  };

  /**
   * Creates a new Vendor record and flips the Quadrant to 
   * display the front (it should be displaying the form when 
   * this is called)
   * @param {string} name 
   * @param {string} phone 
   * @param {string} email 
   * @param {string} notes 
   */
  const createVendor = (
    name,
    phone,
    email,
    notes
  ) => {
    AuthActions.vendors.create(name, phone, email, notes)
      .then(() => {
        setShowFront(!showFront)
      })
  };

  /**
   * Collects the objects which have been checked and 
   * the sends delete requests for any/all vendors that are 
   * current checked. 
   * 
   * calls a refresh of the list when complete 
   */
  const deleteSelected = () => {
    const selected_ids = vendors.reduce((acc, val) => (val.checked ? [...acc, val.id] : acc), [])
    selected_ids.forEach(id => {
      AuthActions.vendors.delete(id)
    })
    updatedVendorList() 
  }

  /**
   * Function called by child form component 
   * that grabs the selected vendor and flips 
   * to the form with that data 
   */
  function editSelected(){
    // todo 
  }

  /**
   * frequently need to reference 
   */
  const num_checked = vendors.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0)

  /**
   * Children components 
   */
  const front = <VendorsFront vendors={vendors} setChecked={setChecked} />;
  const back = <VendorsBack createVendor={createVendor} />;


  return (
    <Quadrant
      title="Vendors"
      onNewClick={() => setShowFront(!showFront)}
      editDisabled={num_checked !== 1}
      editSelected={editSelected}
      deleteSelected={deleteSelected}
      deleteDisabled={num_checked == 0}
      front={front}
      back={back}
      showFront={showFront}
      setShowFront={setShowFront}
    />
  );
};

export default VendorsQuadrant;
