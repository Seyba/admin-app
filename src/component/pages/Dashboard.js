import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgArrowTopRight, CgArrowBottomRight } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { Column } from '@ant-design/plots'
import { Table } from 'antd'

export const Dashboard = () => {

    const data = [
        {
          type: 'Jan',
          sales: 0,
        },
        {
          type: 'Feb',
          sales: 100,
        },
        {
          type: 'Mar',
          sales: 510,
        },
        {
          type: 'Apr',
          sales: 230,
        },
        {
          type: 'May',
          sales: 420,
        },
        {
          type: 'Jun',
          sales: 180,
        },
        {
          type: 'Jul',
          sales: 240,
        },
        {
          type: 'Aug',
          sales: 230,
        },
        {
            type: 'Sep',
            sales: 680,
          },
          {
            type: 'Oct',
            sales: 450,
          },
          {
            type: 'Nov',
            sales: 650,
          },
          {
            type: 'Dec',
            sales: 1500,
          },
    ];
    const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({type}) => {
        return '#ffd333';
    },
    label: {
        position: 'middle',
        style: {
        fill: '#FFFFFF',
        opacity: 1,
        },
    },
    xAxis: {
        label: {
        autoHide: true,
        autoRotate: false,
        },
    },
    meta: {
        type: {
        alias: 'Month',
        },
        sales: {
        alias: 'income',
        },
    },
    };

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
    ];

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
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Total',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const orderData = []
    for(let i = 0; i < 46; i++) {
        orderData.push({
            key: i,
            name: `Edward King ${i}`,
            product: 32,
            status: `London, Park Lane no. ${i}`
        })
    }
  return (
    <div>
        <h3 className="mb-4">Dashboard</h3>
        <div className="container">
            <div className="row">
                <div className=" col-md-4">
                    <div className="mb-3 p-3 card">
                        <div className="d-flex justify-content-between">
                            <h4 className="widget-header">Top sells</h4>
                            <HiOutlineDotsVertical className="widget-link"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="indicator-value">$ 3799.00</h4>
                            <div>
                                <p className="mb-0 text-end indicator-delta-value"> <CgArrowTopRight className="mb-1 indicator-delta-value"/> 34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3 p-3 card">
                        <div className="d-flex justify-content-between">
                            <h4 className="widget-header">Top sells</h4>
                            <HiOutlineDotsVertical className="widget-link"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="indicator-value">$ 3799.00</h4>
                            <div>
                                <p className="mb-0 text-end indicator-delta-value"> <CgArrowTopRight className="mb-1 indicator-delta-value"/> 34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3 p-3 card">
                        <div className="d-flex justify-content-between">
                            <h4 className="widget-header">Top sells</h4>
                            <HiOutlineDotsVertical className="widget-link"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="indicator-value">$ 3799.00</h4>
                            <div>
                                <p className="mb-0 text-end indicator-delta-value"> <CgArrowTopRight className="mb-1 indicator-delta-value"/> 34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Active users</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div className="text-center">
                            <h3>148</h3>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <h3>Active pages</h3>
                                <h3>Users</h3>
                            </div>
                            <ul>
                                <li>
                                    <Link to="">/products/brandix-z4</Link> 10
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card p-3">
                        <div className="mb-4 d-flex justify-content-between align-items-center">
                            <h3 className="mb-4">Income Statics</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div>
                            <Column {...config} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9 mt-4">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Recent Orders</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div>
                            <Table dataSource={orderData} columns={columns} />;
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Sales by traffic source</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
