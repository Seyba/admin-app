import React, { useState } from 'react'
import { CustomInput } from '../CustomInput'

export const AddBrand = () => {
    const [formData, setFormData] = useState([])

    const handleChange = e => {

    }
    
    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <div>
        <h3 className="mb-4">Add Brand Name</h3>
        <div className="">
            <form onSubmit={handleSubmit} action="">
                <CustomInput
                    type="text"
                    label="Enter Brand Name"
                />
                <button 
                    type="submit" 
                    className="btn btn-success border-0 rounded-3 my-5"
                >
                    Add Brand Name
                </button>

            </form>
        </div>
    </div>
  )
}
