import React from 'react'
import "./signup.css"
import Signupinput from './Signupinput'
import Role from './Role'

export default function Signup() {
    return (
        <div className='main' style={{ "flex-direction": "column", "gap": "10px" }}>
            <h1 className='signup-text'>Glad to see you!</h1>
            <div className="signup-box">

                <Signupinput />

            </div>
        </div>
    )
}
