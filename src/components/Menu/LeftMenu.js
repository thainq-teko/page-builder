import React from 'react';
import './leftMenu.scss'
import { Input, Button, Select } from 'antd';
import ProductList from 'components/ProductList'
const { Option } = Select;

const LeftMenu = props => {
  return (
    <div style={{'padding': '0px 20px'}}>
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
          <Select showArrow={true} placeholder="Loại" defaultValue="Chọn Loại" style={{ width: '100%' }}>
            <Option value="Chọn Loại">Chọn Loại</Option>
            <Option value="Listing">Listing</Option>
          </Select>
        </div>
        <div className="cell">
          <Select showArrow={true} defaultValue="- Chọn trạng thái -" style={{ width: '100%' }}>
            <Option value="- Chọn trạng thái -">- Chọn trạng thái -</Option>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </div>
        <div className="cell-button">
          <Button type="primary">
            Tìm kiếm
          </Button>
        </div>
      </div>
      <br />
      <ProductList />
    </div>
  )
}

export default LeftMenu;
