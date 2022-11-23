import SideBar from './side'
import Head from './header'
import Content from './main'

import './index.less'

const Layouts = () => {
  return (
    <div className='layout'>
      <header>
        <Head />
      </header>
      <main>
        <SideBar />
        <Content />
      </main>
    </div>
  )
}

export default Layouts
