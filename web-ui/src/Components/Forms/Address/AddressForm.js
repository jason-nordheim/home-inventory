import React, { useContext } from 'react'
import { AuthorizationContext } from '../../../App'

export const AddressForm = () => {
  const [AuthState, AuthDispatch] = useContext(AuthorizationContext);
  return (
    <div className="addressForm__container">
      <form>
        
      </form>
    </div>
  )
}
