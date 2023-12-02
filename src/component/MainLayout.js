import { useState, React } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom'



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
            <div className="demo-logo-vertical" />
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
                                key: 'Product-details',
                                label:'Product Details'
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
                        icon: <MdOutlineShoppingCart className="fs-4"/>,
                        label: 'Orders',
                    },
                    {
                        key: '',
                        icon: <AiOutlineDashboard />,
                        label: 'Dashboard',
                    },
                    {
                        key: '',
                        icon: <AiOutlineDashboard />,
                        label: 'Dashboard',
                    }
                ]}
            />
            </Sider>
            <Layout>
            <Header
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