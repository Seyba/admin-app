import React from 'react'

export const CustomInput = (props) => {
  const { type, label,  i_id, i_class, name, val, onChg, onBl } = props
  return (
    <div className="form-floating mt-3">
      <input 
        type={type}
        id={`${i_id}`}
        className={`form-control ${i_class}`}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChg}
        onBlur={onChg}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
