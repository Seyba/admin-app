import React, {useEffect} from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getEnquiries } from '../../features/enquiries/enquirySlice'


export const Enquiries = () => {
    const dispatch = useDispatch()
    const enqState = useSelector((state) => state.enquiries.enquiries)

    useEffect(() => {
        dispatch(getEnquiries())
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
          title: 'Email',
          dataIndex: 'email'
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile'
        },
        {
            title: 'Comment',
            dataIndex: 'comment'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
    ];
    const data = []
    for(let i = 0; i < enqState.length; i++) {
        data.push({
            key: enqState[i]._id,
            name: enqState[i].name,
            email: enqState[i].email,
            mobile: enqState[i].mobile,
            comment: enqState[i].comment,
            status: enqState[i].status
        })
    }

  return (
    <div className='container'>
        <h3 className="mb-4">Enquiries</h3>
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
