import React from 'react'
import { Table, Timeline } from 'antd'


export const Enquiries = () => {
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
    const orderData = []
    for(let i = 0; i < 46; i++) {
        orderData.push({
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
        <h3 className="mb-4">Enquiries</h3>
        <div className="card">
            <div className="col-md-12">
                <div>
                    <Table dataSource={orderData} columns={columns} />;
                </div>
            </div>
        </div>
    </div>
  )
}
