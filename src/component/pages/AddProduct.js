import React, { useState } from 'react'
import { CustomInput } from '../CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd'
const { Dragger } = Upload


const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
}
  
export const AddProduct = () => {
    const [formData, setFormData] = useState([])
    const [desc, setDesc] = useState([])

  const handleDesc = (e) => {
    setDesc(e)
  }

    const handleChange = e => {

    }
    
    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <div>
        <h3 className="mb-4">Add Product</h3>
        <div className="">
            <form onSubmit={handleSubmit} action="">
                <CustomInput
                    type="text"
                    label="Enter Product Title"
                />
                <div className="mb-3">
                    <ReactQuill 
                        theme="snow" 
                        value={desc} 
                        onChange={(e) => {handleDesc(e)}}
                    />
                </div>
                <CustomInput
                    type="text"
                    label="Enter Product Price"
                />
                <select className="form-control py-3 mb-3" name="" id="" >
                    <option>Select Brand</option>
                </select>
                <select className="form-control py-3 mb-3" name="" id="" >
                    <option>Select Category</option>
                </select>
                <select className="form-control py-3 mb-3" name="" id="" >
                    <option>Select Color</option>
                </select>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag product image to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
                <button 
                    type="submit" 
                    className="btn btn-success border-0 rounded-3 my-5"
                >
                    Add Product
                </button>

            </form>
        </div>
    </div>
  )
}
