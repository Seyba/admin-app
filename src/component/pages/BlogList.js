import React, {useEffect} from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../features/blogs/blogSlice'

export const BlogList = () => {
    const dispatch = useDispatch()
    const blogState = useSelector((state) => state.blogs.blogs)

    useEffect(()=> {
        dispatch(getBlogs())
    },[])

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
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Date Created',
            dataIndex: 'createdAt'
        },
        {
            title: 'Date Updated',
            dataIndex: 'updatedAt'
        },
        {
            title: 'Author',
            dataIndex: 'author'
        },
    ];
    const data = []
    for(let i = 0; i < blogState.length; i++) {
        data.push({
            key: blogState[i]._id,
            title: blogState[i].title,
            description: blogState[i].description,
            category: blogState[i].category,
            createdAt: blogState[i].createdAt,
            updatedAt: blogState[i].updatedAt,
            author: blogState[i].author
           
        })
    }
    

  return (
    <div className='container'>
        <h3 className="mb-4">Blog List</h3>
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
