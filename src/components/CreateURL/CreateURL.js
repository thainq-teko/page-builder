import React, { useState } from 'react';
import './CreateURL.scss'
import SharedInput from './SharedInput/SharedInput'
import { Button, Select } from 'antd';
// import axios from 'axios'

// const result = axios.get('https://catalog-dev.phongvu.vn/extra-data')
// console.log(result)
const { Option } = Select;


const CreateURL = props => {
  const [input, setInput] = useState([])
  const value = ['Bộ thuộc tính',
    'Thương hiệu',
    'Danh mục bán hàng',
    'Thuộc tính',
    'SKU',
    'Giá',
  ]
  const handleAddingNewRow = event => {
    return setInput(input.concat(div))
  }
  const handleMinus = (event, id) => {
    return setInput(input.filter(el => el !== id))
  }  
  const div = [
    <Button type="dangerous" shape="circle" icon="minus" onClick={handleMinus} />,
    <Select defaultValue="Chọn tiêu chí lọc">
      {value.map(item => <Option value={item}>{item}</Option>)}
    </Select>,
    <Select defaultValue="Chọn tiêu chí lọc">
      {value.map(item => <Option value={item}>{item}</Option>)}
    </Select>,
    <br />
  ]
  return (
    <>
      <div>
        <h2>Thêm mới URL</h2>
        <Button type="default">Hủy bỏ</Button>
        <Button type="primary">Lưu</Button>
      </div>
      <div>
        <SharedInput label="Tên" placeholderTeko="/menu/danh-muc-san-pham/1234" type="input" />
        <SharedInput label="Request Path" placeholderTeko="thiet-bi-dien-tu" type="input" />
        <SharedInput label="Target Path" placeholderTeko="/menu/danh-muc-san-pham/1234" type="input" />
        <SharedInput label="Loại" type="select" />
        <SharedInput label="Trạng thái" type="switch" />
      </div>
      <div>
        <h3>Chọn tiêu chí lọc</h3>
        {input}
        <Button type="primary" shape="circle" icon="plus" onClick={handleAddingNewRow} />
      </div>
    </>
  )
}

export default CreateURL;
