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
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate, Link, Outlet } from 'react-router-dom'
import { FaClipboardList, FaRegUser ,FaBloggerB} from "react-icons/fa";




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
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if(key === 'signout'){

                        } else {
                            navigate(key)
                        }
                    }}  
                    items={[
                        {
                            key: 'Dashboard',
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
                                    key: 'Product-list',
                                    label:'Product List'
                                },
                                {
                                    key: 'Category',
                                    label:'Brand'
                                },
                                {
                                    key:'list-category',
                                    label:'Brand List'
                                },
                                {
                                    key:'Category',
                                    label:'Category'
                                },
                                {
                                    key:'list-category',
                                    label:'Category List'
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
                                    key: 'Blog',
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
                    <div className="d-flex gap-3 align-items-center ">
                        <div></div>
                        <div className="d-flex gap-3 align-items-center">
                            <div>
                                <img src="/images/account-img.jpg" alt="account"/>
                            </div>
                            <div>
                                <h5 className="text-dark">John Doe</h5>
                                <p>JohnDoe@gmail.com</p>
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
                    Content
                </Content>
            </Layout>
        </Layout>
    )
};