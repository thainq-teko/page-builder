import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { URL } from 'services/repository/url.local.js'
import { Pagination, Columns } from 'components/configTable/configTable'

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
          {data.length ? <Table bordered pagination={Pagination} columns={Columns} dataSource={data} />
            : <Table bordered pagination={Pagination} columns={Columns} data={[]} />}
        </div>
      </div>
    </>
  );
};

export default ProductTable;
