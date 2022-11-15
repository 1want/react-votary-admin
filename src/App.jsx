import Router from '@/router'
import { BrowserRouter, HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename='react-tmp'>
      <Router />
    </BrowserRouter>
  )
}

export default App
