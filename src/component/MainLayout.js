import { useState, React } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { AiOutlineDashboard, AiOutlinePicLeft } from 'react-icons/ai'
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useNavigate, Link, Outlet } from 'react-router-dom'
import { FaClipboardList, FaRegUser ,FaBloggerB} from "react-icons/fa"




const { Header, Sider, Content } = Layout;


export const MainLayout= () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className="text-white fs-5 text-center py-3 mb-0 ">DevShop</h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[""]}
                    onClick={({ key }) => {
                        if(key === 'signout'){

                        } else {
                            navigate(key)
                        }
                    }}  
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className="fs-4"/>,
                            label: 'Dashboard',
                        },
                        {
                            key: 'Catalog',
                            icon: <MdOutlineShoppingCart className="fs-4 "/>,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'Product',
                                    label:'Add Product'
                                },
                                {
                                    key: 'list-product',
                                    label:'Product List'
                                },
                                {
                                    key: 'brand',
                                    label:'Brand'
                                },
                                {
                                    key:'list-category',
                                    label:'Category List'
                                },
                                {
                                    key:'list-brand',
                                    label: 'Brand List'
                                },
                                {
                                    key:'Category',
                                    label:'Category'
                                },
                                {
                                    key:'Color',
                                    label:'Color'
                                },
                                {
                                    key:'list-color',
                                    label:'Color List'
                                }
                                
                            ]
                        },
                        {
                            key: 'Customers',
                            icon: <FaRegUser className="fs-4"/>,
                            label: 'Customers',
                        },
                        {
                            key: 'Orders',
                            icon: <FaClipboardList className="fs-4"/>,
                            label: 'Orders',
                        },
                        {
                            key: 'Blog',
                            icon: <FaBloggerB className="fs-4"/>,
                            label: 'Blogs',
                            children:[
                                {
                                    key: 'blog',
                                    label: 'Add Blog'
                                },
                                {
                                    key: 'list-blog',
                                    label: 'Blog List'
                                },
                                {
                                    key: 'blog-category',
                                    label: 'Add Blog Category'
                                },
                                {
                                    Key: 'blog-category-list',
                                    label: 'Blog Category List'
                                }
                            ]
                        },
                        {
                            key: 'Enquiries',
                            icon: <FaClipboardList className="fs-4"/>,
                            label: 'Enquiries',
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className="d-flex justify-content-between ps-1 pe-5"
                    style={{
                    padding: 0,
                    background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="d-flex gap-4 align-items-center ">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-5"/>
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
                        </div>
                        <div className="bg-tertiary d-flex gap-3 align-items-center">
                            <div>
                                <img 
                                    src="/images/account-img.jpg" 
                                    alt="account"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <div>
                                <h5 className="mb-0">John Doe</h5>
                                <p className="mb-0">JohnDoe@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    )
};