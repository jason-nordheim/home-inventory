import React from 'react';
import './CreateLocationForm.css';
import { LabeledUsStateInputSelect } from '../LabeledUsStateInputSelect';
import { LabeledTextInput } from '../LabeledTextInput';

export function CreateLocationForm({ userState, userActions, location, locationActions }) {
	const location_types = {
		undefined : 'Undefined',
		house     : 'House',
		condo     : 'Condominium',
		apartment : 'Apartment',
		storage   : 'Storage Unit',
		other     : 'Other'
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await locationActions.create();
	};

	return (
		<form>
			<div>
				<h1>New Location</h1>
			</div>
      <LabeledTextInput 
        htmlFor="name" 
        label="Name"
        defaultValue={location.name || '' }
        onValueChanged={(e) => locationActions.setName(e.target.value)}
        placeholder="Company or Person"
      />
      <LabeledTextInput 
        htmlFor="street1" 
        label="Street 1"
        defaultValue={location.street1 || '' }
        onValueChanged={(e) => locationActions.setStreet1(e.target.value)}
        placeholder="2500 Mexico Avenue"
      />
      <LabeledTextInput 
        htmlFor="street2" 
        label="Street 2"
        defaultValue={location.street2 || '' }
        onValueChanged={(e) => locationActions.setStreet2(e.target.value)}
        placeholder="Unit 412"
      />
      <LabeledTextInput 
        htmlFor="city" 
        label="City"
        defaultValue={location.city || '' }
        onValueChanged={(e) => locationActions.setCity(e.target.value)}
        placeholder="Boulder"
      />
			<LabeledUsStateInputSelect
				defaultValue={location.state || 'Colorado'}
				onInputChanged={(e) => locationActions.setState(e.target.value)}
			/>
      <LabeledTextInput 
        htmlFor="zip" 
        label="Zip Code"
        defaultValue={location.zip || '' }
        onValueChanged={(e) => locationActions.setZip(e.target.value)}
        placeholder="123456"
      />
		
			<div>
				<label htmlFor="type">Type</label>
				<select
					defaultValue={location.type || location_types[0]}
					onChange={(e) => locationActions.setType(e.target.value)}
					htmlFor="type"
				>
					{Object.entries(location_types).map(([ key, value ]) => (
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
