import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { getColors } from '../../features/color/colorSlice'

export const ColorList = () => {
    const dispatch = useDispatch()

    const columns = [
        {
          title: 'SNo',
          dataIndex: 'key'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Product',
          dataIndex: 'product'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
        {
            title: 'Date',
            dataIndex: 'date'
        },
        {
            title: 'Total',
            dataIndex: 'total'
        },
    ];

    useEffect(() => {
        dispatch(getColors())
    },[])
    const colorState = useSelector((state) => state.colors.colors)

    const data = []
    for(let i = 0; i < colorState.length; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            product: 32,
            status: `London, Park Lane no. ${i}`,
            date: new Date().getFullYear(),
            total: 349
        })
    }

  return (
    <div className='container'>
        <h3 className="mb-4">Colors</h3>
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
