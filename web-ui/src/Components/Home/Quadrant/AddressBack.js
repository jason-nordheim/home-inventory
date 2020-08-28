import React from "react";
import AddressForm from "../../Forms/Address/AddressForm";

export const AddressBack = ({address, updateAddress, submitText, createAddress, onSubmit }) => {

  return (
    <AddressForm
      submitText={submitText}
      createAddress={createAddress}
      updateAddress={updateAddress}
      onSubmit={onSubmit}
      address={address}
    />
  );
};

export default AddressBack;
