import { Button } from 'votary'

const logout = () => {
  localStorage.removeItem('token')
}

const Header = () => {
  return (
    <div className='header'>
      <span>欢乐一家人</span>
      <Button type='primary' className='logout' onClick={logout}>
        退出
      </Button>
    </div>
  )
}

export default Header
