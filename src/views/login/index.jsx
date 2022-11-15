import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'votary'
import './index.css'

const Login = () => {
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('token', 'token')
    navigate('/')
  }
  return (
    <div className='loging-wrapper'>
      <div className='login-form'>
        <Input placeholder='请输入账号' />
        <Input placeholder='请输入密码' type='password' />
        <Button type='primary' onClick={login}>
          登录
        </Button>
      </div>
    </div>
  )
}

export default Login
