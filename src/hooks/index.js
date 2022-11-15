import { makeAutoObservable } from 'mobx'
import parseMenu from '@/utils/parseMenu'

class TestStore {
  list = [
    {
      meta: {
        title: '活动管理'
      },
      path: '/active'
    },
    {
      meta: {
        title: '活动管理'
      },
      path: 'active-manager',
      link: 'active/active-manager'
    }
  ]

  constructor() {
    // 自动监听所有属性
    makeAutoObservable(this)
  }

  // action
  addList(item) {
    this.list = parseMenu(item)
  }
}

export default new TestStore()
