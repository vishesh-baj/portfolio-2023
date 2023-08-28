import { Progress } from "antd";
import React from "react";

const BasicProgress = () => {
  return (
    <div>
      <Progress percent={33} status="active" />
      <Progress
        percent={33}
        type="circle"
        strokeColor={"red"}
        strokeWidth={"2"}
      />
      <Progress
        percent={33}
        type="circle"
        strokeColor={"green"}
        strokeWidth={"2"}
        status="success"
      />
      <Progress
        percent={33}
        type="circle"
        strokeColor={"green"}
        strokeWidth={"2"}
        status="exception"
      />
    </div>
  );
};

export default BasicProgress;
