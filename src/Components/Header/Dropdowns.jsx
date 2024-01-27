import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" className='font-bold ' rel="noopener noreferrer" href="https://www.antgroup.com">
        My Account | Justin Bergson
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" className='' rel="noopener noreferrer" href="https://www.aliyun.com">
        Profile
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Transactions
      </a>
    ),
  },
  {
    key: '4',
    danger: true,
    label: 'Logout',
  },
];

const Dropdowns = () => (
  <Dropdown 
    placement="bottomCenter" // Set the placement to bottomCenter
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className=''>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Dropdowns;
