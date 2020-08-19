import React from "react";
import VendorForm from "../../Forms/Vendor/VendorForm";

export const VendorsBack = ({ createVendor, onSubmit, callFormClear }) => {
  return (
    <VendorForm
      createVendor={createVendor}
      onSubmit={onSubmit}
      callFormClear={callFormClear}
    />
  );
};
