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
import { Multiselect } from 'react-widgets';
import "react-widgets/styles.css";
import Dropzone from 'react-dropzone'
import { uploadImg } from '../../features/upload/uploadSlice';


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
  price: yup.number().required('Price is required'),
  brand: yup.string().required('Brand is required'),
  category: yup.string().required('Category is required'),
  color: yup.array().required('Colors are required'),
  quantity: yup.number().required('quantity is required')
})

export const AddProduct = () => {
  const dispatch = useDispatch()
  const [color, setColor ] = useState([])

  useEffect(() => {
    dispatch(getBrands())
    dispatch(getProdCats())
    dispatch(getColors())
    formik.values.color = color
  },[])
  
  const brandState = useSelector((state) => state.brands.brands)
  const colorState = useSelector((state) => state.colors.colors)
  const catState = useSelector((state) => state.prodCategories.prodCategories)
  const imgState = useSelector((state) => state.upload.images)
  
  const colorData = []
  colorState.forEach(cl => {
    colorData.push({
      id: cl._id,
      color: cl.title
    })
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      description:'',
      price: '',
      brand: '',
      category: '',
      color: '',
      quantity: ''
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
          <select
            className="form-control py-3 mb-3" 
            id="" 
            name="brand"
            onSelect={formik.handleChange('brand')}
            onBlur={formik.handleBlur('brand')}
            val={formik.values.brand} 
          >
            <option>Select Brand</option>
            {brandState.map((brd, i) => 
              <option value={brd.name} key={i}>{brd.name}</option>
            )}
          </select>
          <div className="error mb-3">
            {
              formik.touched.brand && formik.errors.brand
            }
          </div>
          <select
            className="form-control py-3 mb-3" 
            id="" 
            name="category"
            onSelect={formik.handleChange('category')}
            onBlur={formik.handleBlur('category')}
            val={formik.values.category} 
          >
            <option>Select Category</option>
            {catState.map((cat, i) => 
              <option value={cat.title} selected key={i}>{cat.title}</option>
            )}
          </select>
          <div className="error">
            {
              formik.touched.category && formik.errors.category
            }
          </div>
          <Multiselect
            name="color"
            onSelect={(e) => setColor()}
            dataKey="id"
            textField="color"
            data={colorData}
            
          />
          <div className="error mb-3">
            {
              formik.touched.color && formik.errors.color
            }
          </div>

          <CustomInput
            type="text"
            label="Enter product quantity"
            onChg={formik.handleChange('quantity')}
            onBlr={formik.handleBlur('quantity')}
            val={formik.values.quantity}
            name="quantity"
          />
          <div className="error mb-3">
            {
              formik.touched.quantity && formik.errors.quantity
            }
          </div>
          <div className="bg-white text-center border-1 p-5">
            <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showImages mt-3">
            {
              imgState.map((i, j) => {
                return(
                  <div key={j}>
                    <img src={i.url} alt="product" width={200} height={200}/>
                  </div>
                )
              })
            }              
          </div>
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
