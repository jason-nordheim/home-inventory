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

  useEffect(() => {
    updatedVendorList();
  }, [showFront]);

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

  const createVendor = (
    vendorName,
    vendorPhone,
    vendorEmail,
    vendorNotes
  ) => {
    AuthActions.vendors.create(vendorName, vendorPhone, vendorEmail, vendorNotes)
      .then(() => {
        setShowFront(!showFront)
      })
  };

  return (
    <Quadrant
      title="Vendors"
      front={<VendorsFront vendors={vendors} setChecked={setChecked} />}
      back={
        <VendorsBack
          createVendor={createVendor}
        />
      }
      showFront={showFront}
      setShowFront={setShowFront}
    />
  );
};

export default VendorsQuadrant;
