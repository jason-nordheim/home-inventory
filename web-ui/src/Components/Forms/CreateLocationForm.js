import React from "react";
import { States } from '../../helpers/state'
import './CreateLocationForm.css'

export function CreateLocationForm({ userState, userActions, location, locationActions }) {
  const location_types = {
    undefined: "Undefined", 
    house: "House",
    condo: "Condominium",
    apartment: "Apartment", 
    storage: "Storage Unit", 
    other: "Other"
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault() 
    await locationActions.create() 
  }

  return (
    <form>
      <div>
        <h1>New Location</h1>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          defaultValue={location.name || ""}
          onChange={(e) => locationActions.setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="street1">Street 1</label>
        <input
          defaultValue={location.street1 || ""}
          onChange={(e) => locationActions.setStreet1(e.target.value)}
          type="text"
          placeholder="Street 1"
        />
      </div>
      <div>
        <label htmlFor="street2">Street 2</label>
        <input
          defaultValue={location.street2 || ""}
          onChange={(e) => locationActions.setStreet2(e.target.value)}
          type="text"
          placeholder="Street 2"
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          defaultValue={location.city || ""}
          onChange={(e) => locationActions.setCity(e.target.value)}
          type="text"
          placeholder="City"
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <select
          defaultValue={location.state || ""}
          onChange={(e) => locationActions.setState(e.target.value)}
        >
          {States.map((state) => {
            return (
              <option key={state.abbreviation} value={state.name}>
                {state.abbreviation}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="zip">Zip Code</label>
        <input
          value={location.zip || ""}
          onChange={(e) => locationActions.setZip(e.target.value)}
          type="text"
          placeholder="Zip Code"
        />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <select
          defaultValue={location.type || location_types[0].value }
          onChange={(e) => locationActions.setType(e.target.value)}
          htmlFor="type"
        >
          {Object.entries(location_types).map(([key, value]) => (
            <option htmlFor="type" key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Me</button>
      </div>
    </form>
  );
}
