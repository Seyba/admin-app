import React, { useEffect, useState } from 'react'
import { CustomInput } from '../CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../features/brand/brandSlice';
import { getProdCats } from '../../features/categories/prodCatSlice';
import { getColors } from '../../features/color/colorSlice';

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

let schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required')
})

export const AddProduct = () => {
  const dispatch = useDispatch()
  const [brand, setBrand ] = useState([])

  useEffect(() => {
    dispatch(getBrands())
    dispatch(getProdCats())
    dispatch(getColors())
  },[])
  
  const brandState = useSelector((state) => state.brands.brands)
  const colorState = useSelector((state) => state.colors.colors)
  const catState = useSelector((state) => state.prodCategories.prodCategories)

  const formik = useFormik({
    initialValues: {
      title: '',
      description:'',
      price: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    }
  })

  

  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div className="">
        <form onSubmit={formik.handleSubmit} action="">
          <CustomInput
            type="text"
            label="Enter Product Title"
            onChg={formik.handleChange('title')}
            onBlr={formik.handleBlur('title')}
            val={formik.values.title}
            name="title"
          />
          <div className="error">
            {
              formik.touched.title && formik.errors.title
            }
          </div>
          <div className="mb-3">
            <ReactQuill 
              theme="snow" 
              name="description"
              value={formik.values.description} 
              onChange={formik.handleChange('description')}
              onBlur={formik.handleBlur('description')}
            />
          </div>
          <div className="error">
            {
              formik.touched.description && formik.errors.description
            }
          </div>
          <CustomInput 
            type="number" 
            label="Enter Product Price"
            name="price"
            onChg={formik.handleChange('price')}
            onBlr={formik.handleBlur('price')}
            val={formik.values.price} 
          />
          <div className="error mb-3">
            {
              formik.touched.price && formik.errors.price
            }
          </div>
          <select className="form-control py-3 mb-3" name="" id="" >
            <option>Select Brand</option>
            {brandState.map((brd, i) => 
              <option value={brd.name} key={i}>{brd.name}</option>
            )}
          </select>
          <select className="form-control py-3 mb-3" name="" id="" >
            <option>Select Category</option>
            {catState.map((cat, i) => 
              <option value={cat.title} key={i}>{cat.title}</option>
            )}
          </select>
          <select className="form-control py-3 mb-3" name="" id="" >
              <option>Select Color</option>
              {colorState.map((clr, i) => 
              <option value={clr.name} key={i}>{clr.title}</option>
            )}
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
