import { Button } from "antd";
import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
const BasicButton = () => {
  const [loading, setloading] = useState(false);
  const onButtonClick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };

  return (
    <div>
      <Button>Basic</Button>
      <Button href="/" type="link">
        Link
      </Button>
      <Button type="dashed">Dashed</Button>
      <Button type="primary">Primary</Button>
      <Button type="text">Text</Button>
      <Button block>Full width button</Button>
      <Button
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={onButtonClick}
      >
        Button with loading
      </Button>
    </div>
  );
};

export default BasicButton;
