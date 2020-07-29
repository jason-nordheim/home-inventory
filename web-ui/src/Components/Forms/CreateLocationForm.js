import React from "react";
import { States } from '../../helpers/state'

export function createLocationForm({ userState, userActions }) {
  return (
    <form>
      <div>
        <label htmlFor="name">
          Location Name 
        </label>
        <input /> 
      </div>
      <div>
        <label htmlFor="street1">
          Street 1 
        </label>
        <input /> 
      </div>
      <div>
        <label htmlFor="street2">
          Street 2
        </label>
        <input /> 
      </div>
      <div>
        <label htmlFor="city">
          City
        </label>
        <input /> 
      </div>
      <div>
        <label htmlFor="state">
          State
        </label>
        <select>
          { States.map(state => {
            return <input value={state.name}>{state.abbreviation}</input>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="zip">
          Zip Code
        </label>
        <input placeholder="Zip Code" /> 
      </div>
      <div>
        <label htmlFor="type">
          Type
        </label>
        <select htmlFor="type">
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="apartment">Apartment</option>
          <option value="storage unit">Storage Unit</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
  )
}
