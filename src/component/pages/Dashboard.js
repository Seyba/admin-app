import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

export const Dashboard = () => {
  return (
    <div className="bg-light">
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
                    <div className="card">
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
                <div className=" gap-3 col-md-4">
                    <div className="card">
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
                <div className=" col-md-4">
                    <div className="card">
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
