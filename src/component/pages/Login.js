import React from 'react'
import { CustomInput } from '../CustomInput'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'


export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  
  return (
    <div className="py-5" style={{backgroundColor: '#ffd333', minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Log in to your account to continue.</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput 
            name="email" 
            type="email" 
            label="Email address" 
            id="email"
            onChg={formik.handleChange}
            
            val={formik.values.email}
          />
          <CustomInput 
            name="password" 
            type="password" 
            label="Password" 
            id="pass"
            onChg={formik.handleChange('password')}
            
            val={formik.values.password}
          />
          <div className="mb-3 text-end">

            <Link
              to="/forgot-password"
              className=""
            >
              Forgot Passord?
            </Link>
          </div>
          <button 
            className="border-0 px-3 py-2 text-center text-decoration-none fs-5 text-white fw-bold w-100" 
            type="submit" 
            style={{backgroundColor: '#ffd333'}}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
