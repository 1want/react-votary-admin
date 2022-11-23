import { Button } from 'votary'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }

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
