import { Suspense, lazy } from 'react'

const addLazy = url => {
  const Com = lazy(url)
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Com />
    </Suspense>
  )
}

function generator(router) {
  const modules = import.meta.glob('../views/**/*.jsx')
  let newRouters = router.map(r => {
    let routes = {
      path: r.path,
      element: r.link && addLazy(modules[`../views/${r.link}/index.jsx`]),
      meta: r.meta
    }
    if (r.children) {
      routes.children = generator(r.children)
    }
    return routes
  })

  return newRouters
}

export default generator
