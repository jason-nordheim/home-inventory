import { register, login } from "../util/Authentication";

test('Register is a function', () => {
  expect(typeof(register)).toBe('function')
})


test('Registering an already created user fails', () => {
  // return register("Johnny Cash", "jcash", "jcash@gmail.com", "123-456-7899", "password")
  //   .then(actionResult => {
  //     console.log(actionResult)
  //     expect(actionResult.success).toBe(true)
  //     expect(actionResult.data).not.toBeNull() 
  //   })
  return register("Sarah Bear", "sbear", "sbear@gmail.com", "123-456-7899", "password")
    .then(actionResult => {
      console.log(actionResult)
      expect(actionResult.success).toBe(false)
      expect(actionResult.data).not.toBeNull() 
      expect(actionResult.data.error).not.toBeNull()
    })
})


const username = 'sbear'
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