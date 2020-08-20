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
   * Runs a request to the server to get the list of vendors 
   */
  const updatedVendorList = () => {
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
   * Creates a new Vendor record 
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
   * deletes any vendors that are current checked 
   */
  const deleteSelected = () => {
    const selected_ids = vendors.reduce((acc, val) => (val.checked ? [...acc, val.id] : acc), [])
    selected_ids.forEach(id => {
      AuthActions.vendors.delete(id)
    })
    updatedVendorList() 
  }

  /**
   * JSX 
   */
  return (
    <Quadrant
      title="Vendors"
      deleteSelected={deleteSelected}
      deleteDisabled={
        vendors.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0) == 0
      }
      front={<VendorsFront vendors={vendors} setChecked={setChecked} />}
      back={<VendorsBack createVendor={createVendor} />}
      showFront={showFront}
      setShowFront={setShowFront}
    />
  );
};

export default VendorsQuadrant;
