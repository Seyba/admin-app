import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-router-dom'

export const Dashboard = () => {
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
                            <div>
                                <h3>Active pages</h3>
                                <h3>Users</h3>
                            </div>
                            <ul>
                                <li>
                                    <Link to="">/products/brandix-z4</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
