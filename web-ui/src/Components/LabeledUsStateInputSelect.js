import React from 'react' 
import { States } from '../helpers/state'

export function LabeledUsStateInputSelect({ htmlFor="state", label="State", defaultValue, onInputChanged }) {
    return (
        <div>
        <label htmlFor={htmlFor}>{label}</label>
        <select
          defaultValue={defaultValue}
          onChange={onInputChanged}
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
    )
}