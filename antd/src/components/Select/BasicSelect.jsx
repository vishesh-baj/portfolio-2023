import { Select } from "antd";
const BasicSelect = () => {
  const libraries = ["tailwindcss", "mui", "antd", "chakra"];
  return (
    <div>
      <Select placeholder="Select library">
        {libraries.map((library, index) => {
          return (
            <Select.Option value={library} key={index}>
              {library}
            </Select.Option>
          );
        })}
      </Select>
      <Select
        style={{ width: "50%" }}
        allowClear
        mode="multiple"
        placeholder="Select Multiple"
        maxTagCount={2}
      >
        {libraries.map((library, index) => {
          return (
            <Select.Option value={library} key={index}>
              {library}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default BasicSelect;
