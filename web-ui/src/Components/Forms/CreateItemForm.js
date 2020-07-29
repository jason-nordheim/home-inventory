import React from 'react'
import { LabeledTextInput } from '../LabeledTextInput'

export function CreateItemForm(){

    function handleNameChanged(event){}
    function handleEmailChanged(event){}
    function handlePhoneChanged(event){} 

    return (
        <form>
            <div>
                <h1>New Item</h1>
            </div>
            <div>
                <LabeledTextInput htmlFor="name" label="Name" placeholder="John Smith or Apple" onValueChanged={handleNameChanged} />
                <LabeledTextInput htmlFor="email" label="Email" placeholder="email@domain.com" onValueChanged={handleEmailChanged} />
                <LabeledTextInput htmlFor="phone" label="Phone" placeholder="123-456-7890" onValueChanged={handlePhoneChanged} />
                <LabeledTextInput htmlFor="street" label="Steet 1" placeholder="2600 Colorado Avenue" onValueChanged={handlePhoneChanged} />
                <LabeledTextInput htmlFor="street" label="Steet 1" placeholder="Unit 412" onValueChanged={handlePhoneChanged} />
                <LabeledTextInput htmlFor="city" label="City" placeholder="Boulder" onValueChanged={handlePhoneChanged} />
            </div>
           
            <div>
                <h4>Address</h4>
            </div>
            <div>
                <label htmlFor="street1">
                    Street (line 1)
                </label>
                <input htmlFor="street1" placeholder="2600 Smith Street"/> 
            </div>
            <div>
                <label htmlFor="street2">
                    Street (line 2) 
                </label>
                <input htmlFor="street2" placeholder="Apartment 403"/> 
            </div>
        </form>
    )
}


