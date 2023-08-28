import { Table } from "antd";

const BasicTable = () => {
  const data = [
    {
      name: "NameOne",
      age: 21,
      address: "Address One",
      key: "1",
    },
    {
      name: "NameTwo",
      age: 33,
      address: "Address Two",
      key: "2",
    },
    {
      name: "NameThree",
      age: 24,
      address: "Address Three",
      key: "3",
    },
    {
      name: "NameFour",
      age: 12,
      address: "Address Four",
      key: "4",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <a onClick={() => alert(name)}>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => {
        return a.age - b.age;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Graduated",
      render: (payload) => {
        return payload.age > 21 ? <p>YES</p> : <p>NO</p>;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
};  

export default BasicTable;
