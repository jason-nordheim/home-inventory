import React from 'react';
import { LabeledTextInput } from '../LabeledTextInput';
import { LabeledUsStateInputSelect } from '../LabeledUsStateInputSelect';

export function CreateItemForm() {
	function handleNameChanged(event) {}
	function handleEmailChanged(event) {}
	function handlePhoneChanged(event) {}
	function handleStreet1Changed(event) {}
	function handleStreet2Changed(event) {}
	function handleCitChanged(event) {}
	function handleStateChanged(event) {}

	return (
		<form>
			<div>
				<h1>New Item</h1>
			</div>
			<div>
				<LabeledTextInput
					htmlFor="name"
					label="Name"
					placeholder="John Smith or Apple"
					onValueChanged={handleNameChanged}
				/>
				<LabeledTextInput
					htmlFor="email"
					label="Email"
					placeholder="email@domain.com"
					onValueChanged={handleEmailChanged}
				/>
				<LabeledTextInput
					htmlFor="phone"
					label="Phone"
					placeholder="123-456-7890"
					onValueChanged={handlePhoneChanged}
				/>
				<LabeledTextInput
					htmlFor="street1"
					label="Steet 1"
					placeholder="2600 Colorado Avenue"
					onValueChanged={handleStreet1Changed}
				/>
				<LabeledTextInput
					htmlFor="street2"
					label="Steet 1"
					placeholder="Unit 412"
					onValueChanged={handleStreet2Changed}
				/>
				<LabeledTextInput
					htmlFor="city"
					label="City"
					placeholder="Boulder"
					onValueChanged={handlePhoneChanged}
				/>
				<LabeledUsStateInputSelect onInputChanged={handleStateChanged} />
			</div>
		</form>
	);
}
