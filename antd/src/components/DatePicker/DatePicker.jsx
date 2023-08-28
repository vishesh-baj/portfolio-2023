import React from "react";
import { DatePicker, TimePicker } from "antd";
const BasicDatePicker = () => {
  return (
    <div>
      <DatePicker style={{ width: "100%" }} placeholder="default date picker" />
      <DatePicker
        style={{ width: "100%" }}
        placeholder="custom picker by month"
        picker="month"
      />
      <DatePicker.RangePicker placeholder="Date Range Picker" />
      <TimePicker />
    </div>
  );
};

export default BasicDatePicker;
