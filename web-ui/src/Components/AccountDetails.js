import React from 'react' 
import { Redirect } from 'react-router-dom'

export function AccountDetails({userState, userActions}){
    if (!userState) {
       return <Redirect to="/home" /> 
    } else {
        return (
            <main>
                <section> 
                    <h1>Account Details</h1>
                </section>
                <section>
                    <span>
                        <p>{userState.user.first} {userState.user.last}</p>
                    </span>
                </section>
            </main>
        )
    }
}

export default AccountDetails