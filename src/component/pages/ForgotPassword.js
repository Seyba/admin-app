import React from 'react'
import { CustomInput } from '../CustomInput'

export const ForgotPassword = () => {
  return (
    <div className="py-5" style={{backgroundColor: '#ffd333', minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">Please enter your registered email to get a reset link.</p>
        <form action="">
          <CustomInput type="text" label="Email address" id="email"/>
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" type="submit" style={{backgroundColor: '#ffd333'}}>Send Link</button>
        </form>
      </div>
    </div>
  )
}
