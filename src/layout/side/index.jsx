import { Menu } from 'votary'

const SideBar = () => {
  return (
    <Menu>
      <Menu.SubMenu title='首页' index='1' icon='light-rain'>
        <Menu.Item>组件</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='首页' index='2' icon='light-rain'>
        <Menu.Item>组件</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default SideBar
