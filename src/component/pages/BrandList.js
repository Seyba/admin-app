import React, {useEffect} from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBrands } from '../../features/brand/brandSlice'

export const BrandList = () => {
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
          title: 'Created Date',
          dataIndex: 'createdAt'
        },
        {
            title: 'Updated Date',
            dataIndex: 'updatedAt'
        },
        {
            title: 'Action',
            dataIndex: 'action'
        },
    ];

    useEffect(()=> {
        dispatch(getBrands())
    },[])

    const brandState = useSelector((state) => state.brands.brands)
    const data = []

    for(let i = 0; i < brandState.length; i++) {
        data.push({
            key: brandState[i]._id,
            name: brandState[i].name,
            createdAt: brandState[i].createdAt.slice(0, 16).replace('T', ' '),
            updatedAt: brandState[i].updatedAt.slice(0, 16).replace('T', ' '),
            action: 
            <>
                <Link className="fs-3 text-dark" to="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </Link>
                <Link className="fs-3 mx-1 text-danger" to="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </Link>
                <Link className="fs-3 text-dark" to="/admin/brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </Link>
            </>
        })
    }

  return (
    <div className='container'>
        <h3 className="mb-4">Brands</h3>
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
