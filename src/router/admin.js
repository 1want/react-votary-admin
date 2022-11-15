const admin = [
  {
    path: '/active',
    show: 1,
    meta: {
      title: '活动管理'
    },
    children: [
      {
        path: 'active-manager',
        link: 'active/active-manager',
        show: 1,
        meta: {
          title: '活动管理'
        }
      },
      {
        path: 'active-strategy',
        link: 'active/active-strategy',
        show: 1,
        meta: {
          title: '活动攻略'
        }
      },
      {
        path: 'material-manager',
        link: 'active/material-manager',
        show: 1,
        meta: {
          title: '素材管理'
        }
      }
    ]
  }
]

export default admin
