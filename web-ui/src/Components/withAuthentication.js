import React from 'react';
import Authenticator from '../util/Authenticator'

const withAuthentication  = (WrappedComponent) => {
   return (props) => {
      return <WrappedComponent {...props} Authenticator={Authenticator} />;
   }
}

export default withAuthentication