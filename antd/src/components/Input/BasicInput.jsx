import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const BasicInput = () => {
  return (
    <div>
      <Input placeholder="basic input" />
      <Input type="password" placeholder="password type" />
      <Input
        prefix={<UserOutlined />}
        type="password"
        placeholder="input with icon on left"
      />
      <Input
        suffix={<UserOutlined />}
        type="password"
        placeholder="input with icon on right"
      />
      <Input allowClear placeholder="clear input" />
      <Input disabled placeholder="disabled input" />
      <Input.Search placeholder="input as a search field" />
    </div>
  );
};

export default BasicInput;
