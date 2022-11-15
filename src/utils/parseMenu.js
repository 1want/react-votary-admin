import admin from '@/router/admin'
const arr = []
for (var i of admin) {
  if (i.children) {
    arr.push(...i.children)
  }
  arr.push(i)
}
function parseMenu(item) {
  const menu = []
  for (var i of item.keyPath) {
    const res = arr.find(item => item.link === i || item.path === i)
    menu.unshift(res)
    // console.log(res)
  }
  return menu
}

export default parseMenu
