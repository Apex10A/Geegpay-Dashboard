import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const DatePickers = () => (
  <div className='date'>
    <Space direction="vertical">
    <DatePicker onChange={onChange} picker="week" />
  </Space>
  </div>
);
export default DatePickers;