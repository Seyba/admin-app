import React, { useEffect } from 'react'
import { Table } from 'antd'
import { getProducts } from '../../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export const ProductList = () => {
    const dispatch = useDispatch()

    const columns = [
        {
          title: 'SNo',
          dataIndex: 'key'
        },
        {
          title: 'Title',
          dataIndex: 'title'
        },
        {
          title: 'Description',
          dataIndex: 'description'
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Brand',
            dataIndex: 'brand'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity'
        },
    ];


    useEffect(() => {
        dispatch(getProducts())
    },[])

    const productState = useSelector((state) => state.products.products)

    const data = []

    for(let i = 0; i < productState.length; i++) {
        data.push({
            key: productState[i]._id,
            title: productState[i].title,
            description: productState[i].description,
            price: `$${productState[i].price}`,
            category: productState[i].category,
            brand: productState[i].brand,
            quantity: productState[i].quantity
        })
    }


  return (
    <div className='container'>
        <h3 className="mb-4">Products</h3>
        <div className="card">
            <div className="col-md-12">
                <div>
                    <Table dataSource={data} columns={columns} />;
                </div>
            </div>
        </div>
    </div>
  )
}
