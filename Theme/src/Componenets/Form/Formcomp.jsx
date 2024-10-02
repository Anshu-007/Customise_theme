import React from "react";
import { useState } from "react";
import { Modal, Form, Input, ColorPicker, Upload, Button } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import AddMenu from "./AddMenu";

const Formcomp = ({ isFormVisible, setIsFormVisible,setCollection,collection }) => {
  const [menuItems ,setMenuItems] = useState([])
  const [imageUrl , setImageUrl] = useState("")
  const [input, setInput] = useState({
    name: "",
    primary: "",
    secondary: "",
    text: "",
    image: "",
    menuItems: [],
  });

  function submit() {
    // setInput(prevState => ({ ...prevState,"menuItems": menuItems }));
  
    let updatedCollection = [...collection];
    updatedCollection.push({...input ,"menuItems" : menuItems});
  
    setCollection(updatedCollection);
  
    console.log("Menu Items: ", menuItems);
    console.log("Input Object: ", input);
  
    setIsFormVisible(false);
  }
  
  const handleFileChange = ({ fileList }) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0].originFileObj; // Get the file object
      const previewUrl = URL.createObjectURL(file); // Create preview URL
      setImageUrl(previewUrl); // Set the preview image URL
      setInput({ ...input, image: file }); // Store the file in the state
    }
  };
  const handleAddMenu = (menuItems) => {
    setInput({ ...input, "menuItems":menuItems });
  };

  // function changeHandler(e){
  //   let {name , value } = e.target
  //   console.log(name,value)
  // }
  const handleMenuChange = (e, index, field) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index][field] = e.target.value;
    setMenuItems(newMenuItems);
  };
  const addMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { name: '', description: '', price: '', image: null },
    ]);
  }
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  return (
    <Modal
      open={isFormVisible}
      onCancel={() => setIsFormVisible(false)}
      footer={null}
      title="Add Buisiness"
    >






      <Form
        style={{
          maxWidth: "400px",
          maxHeight:"400px",
          overflow:"auto",
          scrollbarWidth:"none",
          msOverflowStyle :"none"
          
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        onFinish={submit}
      >
        <Form.Item label="Buisiness name">
          <Input
            name="name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            value={input.name}
          />
        </Form.Item>
        <Form.Item style={{ display: "flex" }} label="Primar color">
          <div style={{ display: "flex", gap: "4px" }}>
            <ColorPicker
              onChange={(e) => setInput({ ...input, primary: e.toCssString() })}
            />
            <Input value={input.primary} style={{ width: "278px" }} />
          </div>
        </Form.Item>
        <Form.Item label="Secondary color">
          <div style={{ display: "flex", gap: "4px" }}>
            <ColorPicker
              onChange={(e) => setInput({...input , secondary : e.toCssString()})}
            />
            <Input value={input.secondary} style={{ width: "278px" }} />
          </div>
        </Form.Item>
        <Form.Item label="text color">
          <div style={{ display: "flex", gap: "4px" }}>
            <ColorPicker
              onChange={(e) => setInput({ ...input, text: e.toCssString() })}
            />
            <Input value={input.text} style={{ width: "278px" }} />
          </div>
        </Form.Item>

        <Form.Item label="image">
          <Upload onChange={handleFileChange} listType="picture">
            <Button
              style={{ width: "233px" }}
              icon={<UploadOutlined />}
              type="primary"
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Menu" style={{ scrollBehavior: "auto" }}>
          <div>
            {/* Dynamic Menu Items */}
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                <h3>Menu Item {index + 1}</h3>

                {/* Item Name */}
                <Form.Item
                  name={`itemName-${index}`}
                  label="Item Name"
                  rules={[
                    { required: true, message: "Please input the item name!" },
                  ]}
                >
                  <Input
                    name="name"
                    onChange={(e) => {
                      handleMenuChange(e,index,"name");
                    }}
                    placeholder="Enter item name"
                  />
                </Form.Item>

                {/* Item Description */}
                <Form.Item
                  name={`itemDescription-${index}`}
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input the item description!",
                    },
                  ]}
                >
                  <Input
                    name="description"
                    onChange={(e)=>handleMenuChange(e,index,"description")}
                    placeholder="Enter item description"
                  />
                </Form.Item>

                {/* Item Price */}
                <Form.Item
                  name={`itemPrice-${index}`}
                  label="Price"
                  rules={[
                    { required: true, message: "Please input the item price!" },
                  ]}
                >
                  <Input
                    name="price"
                    onChange={(e) =>{handleMenuChange(e,index,"price")}}
                    
                    type="number"
                    placeholder="Enter item price"
                  />
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
              <Button
                type="dashed"
                onClick={addMenuItem}
                style={{ width: "100%" }}
                icon={<PlusOutlined />}
              >
                Add Menu Item
              </Button>
            </Form.Item>

            {/* Submit and Cancel Buttons */}
          </div>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};


export default Formcomp
