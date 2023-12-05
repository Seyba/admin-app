import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgArrowTopRight, CgArrowBottomRight } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { Column, Pie } from '@ant-design/plots'
import { Table } from 'antd'
import ReactStars from "react-rating-stars-component"


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

    const salesData = [
        {
            source: 'Yandex',
            orders: 12,
            amount: 2742.00,
        },
        {
            source: 'Youtube',
            orders: 51,
            amount: 3272.00,
        },
        {
            source: 'Google',
            orders: 4,
            amount: 2303.00,
        },
        {
            source: 'Facebook',
            orders: 10,
            amount: 1434.00,
        },
        {
            source: 'Instagram',
            orders: 1,
            amount: 799.00,
        },
    ]
    const SalePie = () => {
        const data = [
            {
                type: 'Yandex',
                value: 12,
            },
            {
                type: 'YouTube',
                value: 51,
            },
            {
                type: 'Google',
                value: 4,
            },
            {
                type: 'Facebook',
                value: 10,
            },
            {
                type: 'Instagram',
                value: 1,
            },
        ]
        const config = {
            appendPadding: 15,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            label: {
              type: 'inner',
              offset: '-50%',
              content: '{value}',
              style: {
                textAlign: 'center',
                fontSize: 14,
              },
            },
            interactions: [
              {
                type: 'element-selected',
              },
              {
                type: 'element-active',
              },
            ],
            statistic: {
              title: false,
              content: {
                style: {
                  whiteSpace: 'pre-wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
                content: '',
              },
            },
        };
        return <Pie {...config} />
    }

    const listData = [
        {
            image: '/images/wiperBlade.jpg',
            title: 'Wiper Blades Brandix WL2',
            author: 'Ryan Ford',
            stars: '3'
        },
        {
            image: '/images/brandix.jpg',
            title: 'Electric Planer Brandix KL370090G 300 Watts',
            author: 'Adam Taylor',
            stars: '4'
        },
        {
            image: '/images/water-tap.jpg',
            title: 'Water Tap',
            author: 'Jessica Moore', 
            stars: '2'
        },
        {
            image: '/images/brandix.jpg',
            title: 'Brandix Router Power Tool 2017ERXPK',
            author: 'Helena Garcia',
            stars: '3'
        },
        {
            image: '/images/ripper.jpg',
            title: 'Ripper Tool IRadix DPS3000SY 2700 Watts',
            author: 'Ryan Ford',
            stars: 5
        }

    ]
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
                            <h3 className="widget_heading">Active users</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div className="text-center">
                            <h3>148</h3>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <h3 className="widget_heading">Active pages</h3>
                                <h3 className="widget_heading">Users</h3>
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
                            <h3 className="widget_heading mb-4">Income Statics</h3>
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
                            <h3 className="widget_heading">Recent Orders</h3>
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
                            <h3 className="widget_heading">Sales by traffic source</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div>
                            <SalePie/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2 widget-border-b">
                            <div className='widget_th py-2'>Source</div>
                            <div className='widget_th py-2'>Orders</div>
                            <div className='widget_th py-2'>Amount</div>
                        </div>
                        <div>
                            {salesData?.map(sale => {
                                return(
                                    <div className="d-flex justify-content-between  widget-border-b">
                                        <div className="py-1">
                                            <p className="mb-0">{sale.source}</p>
                                        </div>
                                        <div className="py-1">
                                            <p className="mb-0">{sale.orders}</p>
                                        </div>
                                        <div className="py-1">
                                            <p className="mb-0">{`$ ${sale.amount}`}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="widget_heading">Recent activities</h3>
                            <HiOutlineDotsVertical />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <h3 className="widget_heading">Recent reviews</h3>
                            <HiOutlineDotsVertical />
                        </div>
                        <div>
                            {
                                listData.map((data, i) => {
                                    return(
                                        <div className="row widget-border-t py-2">
                                            <div className="col-md-1">
                                                <img src={data.image} className="" alt="review"/>
                                            </div>
                                            <div className="col-md-8">
                                                <Link to="" className="review-link">{data.title}</Link>
                                                <p className="mb-0 review-p">Reviewed by <Link className="review-p_link" to="">{data.author}</Link></p>
                                            </div>
                                            <div className="col-md-3">
                                                <ReactStars 
                                                    count={5} 
                                                    edit={false}
                                                    size={24} 
                                                    activeColor="#ffd700"
                                                    value={data.stars} 
                                                /> 
                                            </div>    
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}