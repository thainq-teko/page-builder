import React from 'react'
import { Button } from 'antd';


export const paginationConfig = {
  position: 'top',
  pageSize: 5,
  showSizeChanger: true,
  pageSizeOptions: ['5','7','10']
}

// let auto_increase = {
//   id : 1
// }

export const columnsConfig = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: 'Request Path',
    dataIndex: 'name',
    key: 'request_path',
    align: 'center',
    render: (text, item) => {
      return <a target="_blank" rel="noopener noreferrer" href={item.request_path}>{text}</a>;
    },
  },
  {
    title: 'Target Path',
    dataIndex: 'target_path',
    key: 'target_path',
    align: 'center',
  },
  {
    title: 'Loại',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
  },
  {
    title: 'Xem',
    align: 'center',
    render: () => <Button type="primary" icon="search"></Button>
  },
];