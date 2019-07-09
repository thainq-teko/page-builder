import React from 'react';
import './leftMenu.scss'
import { Input, Button, Select } from 'antd';

const { Option } = Select;

const LeftMenu = props => {
  return (
    <>
      <div className="filter">
        <div className="label">Tìm kiếm</div>
        <div className="cell">
          <Input
            placeholder="Tên URL"
          />
        </div>
        <div className="cell">
          <Input
            placeholder="Request Path"
          />
        </div>
        <div className="cell">
          <Input
            placeholder="Target Path"
          />
        </div>
        <div className="cell">
          <Select showArrow={true} placeholder="Loại" mode="multiple" style={{ width: '100%' }}>
            <Option value="lucy">lucy</Option>
            <Option value="old">old</Option>
            <Option value="ace">ace</Option>
          </Select>
        </div>
        <div className="cell">
          <Select showArrow={true} placeholder="Chọn trạng thái" mode="multiple" style={{ width: '100%' }}>
            <Option value="Đóng">Đóng</Option>
            <Option value="Mở">Mở</Option>
            <Option value="Chưa biết">Chưa biết</Option>
          </Select>
        </div>
        <div className="cell-button">
          <Button type="primary">
            Tìm kiếm
          </Button>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
