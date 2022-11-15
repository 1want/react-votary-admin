import { Layout } from 'votary'
import SideBar from './side'
import Head from './header'
import Content from './main'

import './index.css'

const { Header, Aside, Main } = Layout

const Layouts = () => {
  return (
    <Layout>
      <Header>
        <Head />
      </Header>
      <Main>
        <Aside>
          <SideBar />
        </Aside>
        <Main>
          <Content />
        </Main>
      </Main>
    </Layout>
  )
}

export default Layouts
