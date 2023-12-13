import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../features/orders/orderSlice';

export const Orders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [])

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

    const orderState = useSelector((state) => state.auth.orders)
    const data = []
    for(let i = 0; i < orderState.length; i++) {
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
        <h3 className="mb-4">Orders</h3>
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
