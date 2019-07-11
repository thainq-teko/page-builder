import React, { useState, useEffect } from 'react';
import './CreateURL.scss'
import SharedInput from './SharedInput/SharedInput'
import { Button, Select } from 'antd';
import { optionalCallExpression } from '@babel/types';
// import axios from 'axios'

// const result = axios.get('https://catalog-dev.phongvu.vn/extra-data')
// console.log(result)
const { Option } = Select;
const CreateURL = props => {
  const [input, setInput] = useState([])
  const [id_u, setId_u] = useState(0)
  const [dieukienloc, setDieukienloc] = useState([])
  const [option, setOption] = useState([])
  const tieuchi = [
    {
      id: 0,
      name: 'Bộ thuộc tính'
    },
    {
      id: 1,
      name: 'Thương hiệu',
    },
    {
      id: 2,
      name: 'Danh mục bán hàng',
    },
    {
      id: 3,
      name: 'Thuộc tính',
    },
    {
      id: 4,
      name: 'SKU',
    },
    {
      id: 5,
      name: 'Giá',
    },
  ]
  useEffect(() => console.log(input), [input])
  const handleAddingNewRow = id_u => {
    let temp = id_u + 1
    setId_u(temp)
    setInput([...input, { id: temp, data: {
      field1: undefined,
      field2: undefined
    } }])
  }
  const handleMinus = (index) => {
    console.log("vi tri xoa: ", index)
    setInput(input.filter((element) => element.id !== index))
  }
  const handleTieuchilocChange = (event, id) => {
    console.log(event, id)
    let input1 = []
    input.forEach(el => input1.push(el))
    input1.forEach(element => {
      if (element.id === id) element.data.field1 = event
    })
    setInput(input1)
    // // call API
    setDieukienloc(dieukienloc.concat(event))
  }
  const divA = (element) => (
    <div>
      <Button type="dangerous" shape="circle" icon="minus" onClick={() => handleMinus(element.id)} />
      <Select className="w-20" value={element.data.field1} placeholder="Chọn tiêu chí lọc" onChange={(event) => handleTieuchilocChange(event, element.id)}>
        {tieuchi.map(item => <Option key={item.id} value={item.name}>{item.name}</Option>)}
      </Select>
      <Select className="w-20" value={element.data.field2}>
        {dieukienloc.map(item => <Option key={item} value={item}>{item}</Option>)}
      </Select>
      <br />
    </div>)

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
        {
          input.map((el) => divA(el))
        }
        <Button type="primary" shape="circle" icon="plus" onClick={() => handleAddingNewRow(id_u)} />
      </div>
    </>
  )
}

export default CreateURL;
