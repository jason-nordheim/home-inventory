import React, { useState } from "react";
import NameTextField from "../Fields/NameTextField";
import DollarAmountInput from "../Fields/DollarAmountInput";
import DatePicker from "../Fields/DatePicker";
import SelectLocation from "../Fields/SelectLocation";
import { Switch, FormControl, FormHelperText } from "@material-ui/core";

export const ItemForm = ({ locations }) => {
  const [itemName, setItemName] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0.0);
  const [actualValue, setActualValue] = useState(0.0);
  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [selling, setSelling] = useState(false);
  const [location, setLocation] = useState(locations[0]);

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
          <FormControl size="small" className="itemForm__switch">
            <FormHelperText>For Sale?</FormHelperText>
            <Switch
              size="small"
              label="For Sale?"
              checked={selling}
              color="primary"
              onChange={(e) => setSelling(e.target.checked)}
            />
          </FormControl>
        </div>
        <div className="itemForm__fullWidthField">
          <DatePicker
            value={purchaseDate}
            label="Purchase Date"
            onChange={(date) => setPurchaseDate(date)}
          />
        </div>
        <div className="itemForm__fullWidthField">
          <SelectLocation
            menuItems={locations}
            value={location}
            onChange={(e) =>
              setLocation(locations.find((loc) => loc.id === e.target.value))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
