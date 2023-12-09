import React, {useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/customers/customerSlice';


export const Customers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },[])

    const customerState = useSelector((state) => state.customers.customers)
    
    const data1 = []

    const columns = [
        {
          title: 'SNo',
          dataIndex: 'key'
          
        },
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.length - b.name.length
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Date',
            dataIndex: 'date'
        },
        
    ];

    for(let i = 0; i < customerState.length; i++) {
        if(customerState[i].role !== 'admin') {
            data1.push({
                key: customerState[i]._id,
                name: `${customerState[i].firstname} ${customerState[i].lastname}`,
                email: customerState[i].email,
                mobile: customerState[i].mobile,
                date: customerState[i].createdAt.slice(0, 16).replace('T', ' ')
            })
        }
    }

  return (
    <div className='container'>
        <h3 className="mb-4">Customers</h3>
        <div className="card">
            <div className="col-md-12">
                <div>
                    <Table dataSource={data1} columns={columns} />;
                </div>
            </div>
        </div>
    </div>
  )
}
