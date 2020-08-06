import React from 'react';
import { render } from '@testing-library/react';
import Authenticator from '../util/Authenticator'


test('Authenticator Imports', () => {
    expect(Authenticator).toBeDefined()
    expect(Authenticator.register).toBeDefined()
    expect(Authenticator.login).toBeDefined() 
    expect(Authenticator.isLoggedIn).toBe(false)
    expect(Authenticator.baseUrl).toBe("http://localhost:3000")
})

// test('Authenticator can successfully register a user', () => {
//     const newUser = {
//         username: "jnordheim", 
//         password: "p@ssw0rd", 
//         email: "jason.nordheim@gmail.com", 
//         phone: "123-456-7890"
//     }
//     expect(() => Authenticator.register(newUser)).toThrow()
// })