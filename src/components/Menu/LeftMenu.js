import React from 'react';
import './leftMenu.scss'
import { Input, Button, Select } from 'antd';
import ProductTable from 'components/ProductTable'
const { Option } = Select;

const LeftMenu = props => {
  const handleFilter = () => {
    props.history.push('/create')
  }
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
          <Select showArrow={true} defaultValue="Chọn Loại" style={{ width: '100%' }}>
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
          <Button type="primary" onClick={() => handleFilter()}>
            Tìm kiếm
          </Button>
        </div>
      </div>
      <br />
      <ProductTable />
      <br />
      <br />
    </div>
  )
}

export default LeftMenu;
