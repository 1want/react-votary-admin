import { Select, Input } from 'antd'
const { Option } = Select

import { Wrapper } from './style'

const selectItem = arr =>
  arr.map(item => <Option value={item.value}>{item.label}</Option>)

const Tab = props => {
  const { select } = props
  return (
    <Wrapper>
      <div className='content'>
        <span class='title'>活动选择 : </span>
        <Select defaultValue='' style={{ width: 260 }}>
          {selectItem(select)}
        </Select>
      </div>
      <div className='content'>
        <span class='title'>活动名称 : </span>
        <Input placeholder='Basic usage' />
      </div>
    </Wrapper>
  )
}

export default Tab
