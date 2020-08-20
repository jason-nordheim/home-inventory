import React, { useState } from "react";
import NameTextField from "../Fields/NameTextField";
import DollarAmountInput from "../Fields/DollarAmountInput";
import DatePicker from "../Fields/DatePicker";
import DateFnsUtils from "@date-io/date-fns";

export const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0.0);
  const [actualValue, setActualValue] = useState(0.0);
  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [selling, setSelling] = useState(false);
  const [location, setLocation] = useState({});

  return (
    <div className="itemForm__container">
      <form>
        <div className="itemForm__fullWidthField">
          <NameTextField
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            error={null}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <NameTextField
            value={category}
            label="Item Category"
            onChange={(e) => setCategory(e.target.value)}
            error={null}
            required={false}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <NameTextField
            value={make}
            label="Make/Manufacturer"
            onChange={(e) => setMake(e.target.value)}
            error={null}
            required={false}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <NameTextField
            value={model}
            label="Model"
            onChange={(e) => setModel(e.target.value)}
            error={null}
            required={false}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <NameTextField
            value={serialNumber}
            label="Serial Number"
            onChange={(e) => setSerialNumber(e.target.value)}
            error={null}
            required={false}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <DollarAmountInput
            label="Estimated Value"
            value={estimatedValue}
            error={null}
            required={false}
            onChange={(e) => setEstimatedValue(e.target.value)}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <DollarAmountInput
            label="Actual Value"
            value={actualValue}
            error={null}
            required={false}
            onChange={(e) => setActualValue(e.target.value)}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <DatePicker
            value={purchaseDate}
            label="Purchase Date"
            onChange={(date) => setPurchaseDate(date)}
          />
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
