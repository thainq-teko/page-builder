import React, { useState, useEffect } from 'react';
import { Table, Select } from 'antd';
import { URL } from 'services/repository/url.local.js'
import { paginationConfig, columnsConfig } from 'components/configTable/configTable'
import './ProductTable.scss'

const initData = URL.data;
const { Option } = Select;

const ProductTable = props => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState(paginationConfig)
  useEffect(() => {
    setData(initData)
  }, [])
  const handleRangeSelect = value => {
    setPagination({ ...pagination, pageSize: parseInt(value) });
  }
  return (
    <>
      <div className="box">
        <div className="label">
          Danh sách URL
        </div>
        <div className="table_product">
          <div className="">
            <span>Xem </span>
            <Select defaultValue="5" onChange={handleRangeSelect}>
              <Option value="5">5</Option>
              <Option value="7">7</Option>
              <Option value="10">10</Option>
            </Select>
            <span> dòng/ trang</span>
          </div>
          <Table bordered pagination={pagination} columns={columnsConfig} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default ProductTable;
