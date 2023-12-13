import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../features/auth/authSlice';
import moment from 'moment'

export const Orders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    const orderState = useSelector((state) => state.auth.orders)

    const columns = [
        {
          title: 'SNo',
          dataIndex: 'key'
        },
        {
          title: 'Date',
          dataIndex: 'date'
        },
        {
          title: 'Customer',
          dataIndex: 'customer'
        },
        {
            title: 'Product',
            dataIndex: 'product'
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile'
        },
        {
            title: 'Amount',
            dataIndex: 'amount'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
    ];
    console.log(moment().format("MMM Do YY"))
    const data = []
    for(let i = 0; i < orderState.length; i++) {
        data.push({
            key: orderState[i]._id,
            date:  moment(orderState[i].createdAt).format("MMMM Do YYYY"),//orderState[i].createdAt.slice(0, 16).replace('T', ' '),
            customer: `${orderState[i].orderBy.firstname} ${orderState[i].orderBy.lastname}`,
            product: orderState[i].products.map((prod, j) => <ul key={j}><li>{prod.product.title}</li></ul>),
            mobile: orderState[i].orderBy.mobile,
            amount: orderState[i].paymentIntent.amount,
            status: orderState[i].orderStatus
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
