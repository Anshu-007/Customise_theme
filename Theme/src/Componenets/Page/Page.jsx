import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import './Page.css'; // Custom CSS for styling
const { Header, Footer, Content,Card } = Layout;
const {Meta} = Card
const Page = ({theme,setIsPageVisible}) => {
  console.log(theme)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header with logo and navigation */}
      <Header style={{backgroundColor : `${theme.primary}`, text : `${theme.text}`}} className="page-header">
        <div className="logo">
          <img src={URL.createObjectURL(theme.image)} alt="Logo" />
        </div>
        <div style={{color : `${theme.text}`}} className="site-name">{theme.name != "" ? theme.name : "Your Website Name"}</div>
        <Button onClick={()=>setIsPageVisible(false)}>back</Button>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="3" icon={<PhoneOutlined />}>
            Contact
          </Menu.Item>
        </Menu> */}
      </Header>

      {/* Content Area */}
      <Content style={{backgroundColor : `${theme.secondary}`}} className="page-content">
        <div style={{width:"100%",height:"400px",overflow:"auto", display:"flex",flexWrap:"wrap"}}>
          {theme.menuItems.map((value)=>{
                return <Card style={{width:"300px"}} cover ={<img src='' alt=''/>}>
                  <Meta title ={value.name} description={value.description}></Meta>

                </Card>
          })}
        </div>
        <div style={{color : `${theme.text}`}} className="content-wrapper">
          <h1>Welcome to Our Website</h1>
          <p>Here are some details about the website.</p>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{backgroundColor:`${theme.primary}`,color : `${theme.text}`}} className="page-footer">
        © {new Date().getFullYear()} `${theme.name}` . All rights reserved.
      </Footer>
    </Layout>
  );
};

export default Page;
