import React, { useState,useEffect } from 'react';
import { Modal, Form, Input, Button, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

const AddMenu = ({handleAddMenu}) => {
  const [menuItems, setMenuItems] = useState([]);
  
  // Function to add new empty menu item
  const addMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { name: '', description: '', price: '', image: null },
    ]);
  };

  // extra line

  // Handle form submit
  const changeHandler = (e,idx) => {
    let {name , value} = e;
    menuItems[idx] = {...menuItems[idx] , [name] : value}
    setMenuItems(menuItems)
  };
  useEffect(()=>{
    addMenuItem();
    handleAddMenu(menuItems);
  },[])

  return (
    
    <div>
      
        
        {/* Dynamic Menu Items */}
        {menuItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>Menu Item {index + 1}</h3>

            {/* Item Name */}
            <Form.Item
              name={`itemName-${index}`}
              label="Item Name"
              rules={[{ required: true, message: 'Please input the item name!' }]}
            >
              <Input name='name' onChange={(e)=>{changeHandler(e)}} placeholder="Enter item name" />
            </Form.Item>

            {/* Item Description */}
            <Form.Item
              name={`itemDescription-${index}`}
              label="Description"
              rules={[{ required: true, message: 'Please input the item description!' }]}
            >
              <Input name='description' onChange={changeHandler} placeholder="Enter item description" />
            </Form.Item>

            {/* Item Price */}
            <Form.Item
              name={`itemPrice-${index}`}
              label="Price"
              rules={[{ required: true, message: 'Please input the item price!' }]}
            >
              <Input name='price' onChange={(e)=>{changeHandler(e)}} type="number" placeholder="Enter item price" />
            </Form.Item>

            {/* Item Image */}
            <Form.Item
              name={`itemImage-${index}`}
              label="Upload Image"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
            >
              <Upload name="image" listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </div>
        ))}

        {/* Button to Add More Menu Items */}
        <Form.Item>
          <Button type="dashed" onClick={addMenuItem} style={{ width: '100%' }} icon={<PlusOutlined />}>
            Add Menu Item
          </Button>
        </Form.Item>

        {/* Submit and Cancel Buttons */}
        
      
    </div>
  );
};

export default AddMenu;
