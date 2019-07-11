import React from 'react';
import { Input, Select, Switch } from 'antd';
import './SharedInput.scss'

const { Option } = Select


const SharedInput = props => {
  const { label, placeholderTeko, type } = props
  const value = ['Rewrite', 'Redirect']
  return (
    <>
      <div className="sharedInput">
        <div className="sharedInputLabel">{label}</div>
        {type === "input" ? <div className="sharedInputCell"><Input placeholder={placeholderTeko} /></div> : null}
        {type === "select" ? <Select defaultValue="Rewrite" className="sharedInputCell" style={{'width': '20%'}}>{value.map(k => <Option key={k} value={k}>{k}</Option>)}</Select> : null}
        {type === "switch" ? <Switch checked/> : null}
      </div>
    </>
  )
}

export default SharedInput;
