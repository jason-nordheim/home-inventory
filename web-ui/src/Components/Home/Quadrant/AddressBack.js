import React from "react";
import AddressForm from "../../Forms/Address/AddressForm";

export const AddressBack = ({ onCreate }) => {
  return <AddressForm onSuccess={onCreate}  />;
};

export default AddressBack