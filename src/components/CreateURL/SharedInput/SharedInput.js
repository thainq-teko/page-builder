import React from 'react';
import { Input, Select, Switch } from 'antd';
import './SharedInput.scss'

const { Option } = Select


const SharedInput = props => {
  const { label, placeholderTeko, type } = props
  return (
    <>
      <div className="sharedInput">
        <div className="sharedInputLabel">{label}</div>
        {type === "input" ? <div className="sharedInputCell"><Input placeholder={placeholderTeko} /></div> : null}
        {type === "select" ? <Select className="sharedInputCell" style={{'width': '20%'}}><Option value="1">1</Option></Select> : null}
        {type === "switch" ? <Switch checked/> : null}
      </div>
    </>
  )
}

export default SharedInput;
