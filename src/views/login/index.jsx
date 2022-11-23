import { useNavigate } from 'react-router-dom'
import { Input } from 'votary'

import './index.less'

const Login = () => {
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('token', 'token')
    navigate('/')
  }
  return (
    <div className='login-wrapper'>
      <div className='login-form'>
        <Input
          leftIcon='user'
          type='text'
          placeholder='please input username'
        />
        <Input
          leftIcon='lock'
          type='text'
          placeholder='please input password'
        />
        <span className='login' onClick={login}>
          LOGIN
        </span>
      </div>
    </div>
  )
}

export default Login
