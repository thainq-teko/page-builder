import React from 'react';
import './ProductList.scss'
import { Pagination } from 'antd';

const ProductList = props => {
  return (
    <>
      <div className="box">
        <div className="label">
          Danh sách URL 
        </div>
        <div className="paging">
          <Pagination size="small" total={50} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
