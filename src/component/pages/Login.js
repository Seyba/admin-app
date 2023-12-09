import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { CustomInput } from '../CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let schema = Yup.object().shape({
    email: Yup.string().email('Must enter valid email'),
    password: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2))
    }
  })

  const {user, isLoading,isError, isSuccess, message } = useSelector((state) => state.auth )
  
  useEffect(() => {
    if(user || isSuccess) {
      navigate('admin')
    } else {
      alert('Not authorized!')
    }
  },[user, isLoading,isError, isSuccess, message])
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
            type="text" 
            label="Email address" 
            id="email"
            onChg={formik.handleChange}
            
            val={formik.values.email}
          />
          <div className="error">
            {
              formik.touched.email && formik.errors.email? (
                <div>{formik.errors.email}</div>
              ): null
            }
          </div>
          <CustomInput 
            name="password" 
            type="password" 
            label="Password" 
            id="pass"
            onChg={formik.handleChange('password')}
            val={formik.values.password}
          />
          <div className="error">
            {
              formik.touched.password && formik.errors.password? (
                <div>{formik.errors.password}</div>
              ): null
            }
          </div>
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
