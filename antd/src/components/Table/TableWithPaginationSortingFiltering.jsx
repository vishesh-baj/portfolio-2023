import { Table } from "antd";
import { useEffect, useState } from "react";

const TableWithPaginationSortingFiltering = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => {
        return a.id > b.id;
      },
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (a, b) => {
        return a.userId > b.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Completed" : "In Progress"}</p>;
      },

      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res
        .json()
        .then((data) => setDataSource(data))
        .catch((err) => console.log("ERROR", err.message))
        .finally(() => setLoading(false))
    );
  }, []);
  return (
    <div>
      <Table
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setpage(page);
            setPageSize(pageSize);
            // Make the api call here with page and page size
          },
        }}
        loading={loading}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default TableWithPaginationSortingFiltering;
