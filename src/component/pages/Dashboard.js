import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgArrowTopRight } from "react-icons/cg";


export const Dashboard = () => {
  return (
    <div>
        <h3 className="mb-4">Dashboard</h3>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="container">
            <div className="row">
                <div className=" col-md-4">
                    <div className="mb-3 p-3 card">
                        <div className="d-flex justify-content-between">
                            <h4 className="widget-header">Top sells</h4>
                            <HiOutlineDotsVertical className="widget-link"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>$ 3799.00</h4>
                            <div className="">
                                <p className="mb-0 text-end"> <CgArrowTopRight className="mb-1 text-primary"/> 34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3 card">
                        <div className="d-flex justify-content-between">
                            <h4>Top sells</h4>
                            <HiOutlineDotsVertical className="fs-4"/>
                        </div>
                        <div>
                            <h4>$ 3799.00</h4>
                            <div className="d-flex justify-content-between">
                                <p>34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3 card">
                        <div className="d-flex justify-content-between">
                            <h4>Top sells</h4>
                            <HiOutlineDotsVertical className="fs-4"/>
                        </div>
                        <div>
                            <h4>$ 3799.00</h4>
                            <div className="d-flex justify-content-between">
                                <p>34.7%</p>
                                <p>Compare to April 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
