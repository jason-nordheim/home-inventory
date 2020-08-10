import React from 'react';
import Authenticator from '../util/Authenticator'

/**
 * Wrapps the provided component and adds `Authenticator` into 
 * props to enable use of Authentication 
 * @param {React.Component} WrappedComponent 
 */
const withAuthentication  = (WrappedComponent) => {
   return (props) => {
      return <WrappedComponent {...props} Authenticator={Authenticator} />;
   }
}

export default withAuthentication