import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { URL } from 'services/repository/url.local.js'
import { paginationConfig, columnsConfig } from 'components/ConfigTable/configTable'
import './ProductTable.scss'

const initData = URL.data;

const ProductTable = props => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(initData)
  }, [])
  
  return (
    <>
      <div className="box">
        <div className="label">
          Danh sách URL
        </div>
        <div className="table_product">
          <Table bordered pagination={paginationConfig} columns={columnsConfig} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default ProductTable;
