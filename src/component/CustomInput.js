import React from 'react'

export const CustomInput = (props) => {
    const { type, label,  i_id, i_class} = props
  return (
    <div className="form-floating mb-3">
        <input 
            type={type}
            id={`${i_id}`}
            className={`form-control ${i_class}`}
            placeholder={label}
            
        />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}
