import React from 'react'
import { CustomInput } from '../CustomInput'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="py-5" style={{backgroundColor: '#ffd333', minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Log in to your account to continue.</p>
        <form action="">
          <CustomInput type="text" label="Email address" id="email"/>
          <CustomInput type="password" label="Password" id="pass"/>
          <div className="mb-3 text-end">

            <Link
              to="/forgot-password"
              className=""
            >
              Forgot Passord?
            </Link>
          </div>
          <Link 
            to="/admin" 
            className="border-0 px-3 py-2 text-center text-decoration-none fs-5 text-white fw-bold w-100" 
            type="submit" 
            style={{backgroundColor: '#ffd333'}}
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  )
}
