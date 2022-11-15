function generatorMenu(arr) {
  let menu = []
  let menuItem = {}
  for (var i of arr) {
    menuItem = {}
    menuItem.label = i.meta.title
    menuItem.key = i.link || i.path
    menuItem.icon = i.meta.icon
    if (i.children) {
      menuItem['children'] = generatorMenu(i.children)
    }
    menu.push(menuItem)
  }
  return menu
}

export default generatorMenu
