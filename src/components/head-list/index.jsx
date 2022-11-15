import { Breadcrumb } from 'antd'

import { observer } from 'mobx-react'
import store from '@/hooks'

import { Wrapper } from './style'

const HeadList = () => {
  return (
    <Wrapper>
      <Breadcrumb>
        {store.list.map(item => {
          return (
            <Breadcrumb.Item key={item.path}>{item.meta.title}</Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
      <p className='title'>{store.list[1].meta.title}</p>
    </Wrapper>
  )
}

export default observer(HeadList)
