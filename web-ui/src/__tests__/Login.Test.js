import { login } from '../util/Authentication'

const username = 'jnordheim'
const password = 'password' 

test('Login is a function', () => {
    expect(typeof(login)).toBe('function')
})

test('login does not throw', () => {
    return login(username, password)
        .then(actionResult => {
            expect(actionResult.data).not.toBeNull()
            expect(actionResult.success).toBe(true)

        })
})

test('login returns token', () => {
    return login(username, password)
        .then(actionResult => {
            expect(actionResult.success).toBe(true)
            expect(actionResult.data).not.toBeNull()
            expect(actionResult.data.token).not.toBeNull()
        })
})

test('login fails with invalid credentials', () => {
    return login('jonny', 'password')
        .then(actionResult => {
            expect(actionResult.success).toBe(false)
            expect(actionResult.data.error).not.toBeNull()
        })
})