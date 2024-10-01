import React from "react";
import { Layout, Carousel, Card, Col, Row,Button } from "antd";
import "./Home.css"; // Assuming you have a CSS file for custom styles
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Formcomp from "../Form/Formcomp";
import { useState } from "react";

const { Header, Footer, Content } = Layout;








const Home = ({collection , setCollection , showPage}) => {
  let dummyData = []
  const [isFormVisible , setIsFormVisible] = useState(false)
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "url()",
        backgroundSize: "cover",
      }}
    >
      <Header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          textAlign: "center",
          fontSize: "24px",
          display:"flex",
          justifyContent:"space-between"
        }}
      >
        THEME
        <span >
          <Button onClick={()=>{setIsFormVisible(true)}}>Add Buisiness</Button>
        </span>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
        }}
      >

        <Row style={{ width: "100%" }}>
          {/* Left Section: Dummy Cards */}
          <Col span={12} style={{ padding: "10px"  }}>
            <h2 style={{ textAlign: "center", color: "gray" }}>Cards</h2>
            <Row gutter={[16, 16]}>
              {collection.map((item, index) => (
                <Col span={8} key={index}>
                  <Card
                  size="large"
                    title={<h3 className="card-title">{item.name}</h3>}
                    bordered={false}
                    hoverable
                    className="custom-card"
                    actions={[
                      
                    ]}
                  >
                    <p className="card-description">{item.description}</p>
                    <Button onClick={()=>showPage(index)} type="primary" shape="round" size="small">
                      show
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Section: Carousel */}
          {isFormVisible ? <Formcomp isFormVisible = {isFormVisible} setIsFormVisible = {setIsFormVisible} collection ={collection} setCollection={setCollection}/>:
          <Col span={12} style={{ padding: "10px" }}>
            <h2 style={{ textAlign: "center", color: "gray" }}>Carousel</h2>
            <Carousel autoplay>
              <div>
                <h3 style={{ color: "white", textAlign: "center" }}>Slide 1</h3>
              </div>
              <div>
                <h3 style={{ color: "white", textAlign: "center" }}>Slide 2</h3>
              </div>
              <div>
                <h3 style={{ color: "white", textAlign: "center" }}>Slide 3</h3>
              </div>
            </Carousel>
          </Col>}
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        © {new Date().getFullYear()} theme
      </Footer>
    </Layout>
  );
};

export default Home;
