import { Form, Input, Button, message, Alert } from "antd";
import { useState } from "react";
const FormComponent = () => {
  const [showAlert, setshowAlert] = useState(false);
  const onFinish = (formData) => {
    alert(JSON.stringify(formData));
    setTimeout(() => {
      setshowAlert(true);
      message.success("Login Successful");
      Alert("LOGGED IN");
    }, 2000);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          type="error"
          message="Error occured"
          description="there was an error"
          closable
        />
      )}
      <Form onFinish={onFinish}>
        <Form.Item name="userename" label="User Name">
          <Input placeholder="enter username" required />
        </Form.Item>
        <Form.Item name="password" label="User Password">
          <Input.Password type="password" placeholder="enter password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
