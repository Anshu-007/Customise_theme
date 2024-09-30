import React from 'react'
import { useState } from 'react'
import { Modal,Form,Input ,ColorPicker,Upload, Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'








const Formcomp = ({isFormVisible , setIsFormVisible}) => {
  const [input , setInput] = useState({
    name :"",
    primary :"",
    secondary : "",
    text:"",
    image : ""
  })






  function submit(e){
    
  }

  function changeHandler(e){
    let {name , value } = e.target
    console.log(name,value)
  }
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  }; 
  
  
  
  

  return (
    <Modal open={isFormVisible} onCancel={()=>setIsFormVisible(false)} footer={null} title="Add Buisiness">
      <Form style={{
        maxWidth:"400px"
      }}
      labelCol={{span : 8}}
      wrapperCol={{span : 14}}
      onFinish={(e)=>{submit(e)}}
      >

      <Form.Item label="Buisiness name">
          <Input name='name' onChange={changeHandler} value={input.name} />
        </Form.Item>
        <Form.Item style={{display:"flex" }} label="Primar color">
          <div style={{display:"flex" , gap:"4px"}}>
          <ColorPicker />
          <Input style={{width:"278px"}}/>
          </div>
        </Form.Item>
        <Form.Item label="Secondary color">
        <div style={{display:"flex" , gap:"4px"}}>
          <ColorPicker />
          <Input style={{width:"278px"}}/>
          </div>
        </Form.Item>
        <Form.Item label="text color">
        <div style={{display:"flex" , gap:"4px"}}>
          <ColorPicker />
          <Input style={{width:"278px"}}/>
          </div>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>logo</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item><Button htmlType='submit'>Submit</Button></Form.Item>
      </Form>
    </Modal>
  )
}

export default Formcomp