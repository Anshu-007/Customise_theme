import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import './Page.css'; // Custom CSS for styling

const { Header, Footer, Content } = Layout;

const Page = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header with logo and navigation */}
      <Header className="page-header">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <div className="site-name">Your Website Name</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="3" icon={<PhoneOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Header>

      {/* Content Area */}
      <Content className="page-content">
        <div className="content-wrapper">
          <h1>Welcome to Our Website</h1>
          <p>Here are some details about the website.</p>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="page-footer">
        © {new Date().getFullYear()} theme . All rights reserved.
      </Footer>
    </Layout>
  );
};

export default Page;
