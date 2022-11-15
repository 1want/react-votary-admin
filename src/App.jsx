import Router from '@/router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename='react-votary-admin'>
      <Router />
    </BrowserRouter>
  )
}

export default App
