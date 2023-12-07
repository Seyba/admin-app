import React, { useState } from 'react'
import { CustomInput } from '../CustomInput'

export const AddBlogCat = () => {
    const [formData, setFormData] = useState([])

    const handleChange = e => {

    }
    const handleSubmit = e => {
        e.preventDefault()
    }
  return (
    <div>
        <h3 className="mb-4">Add Blog Category</h3>
        <div className="">
            <form onSubmit={handleSubmit} action="">
                <CustomInput
                    type="text"
                    label="Enter Blog Category"
                />
                <button 
                    type="submit" 
                    className="btn btn-success border-0 rounded-3 my-5"
                >
                    Add Blog Category
                </button>

            </form>
        </div>
    </div>
  )
}
