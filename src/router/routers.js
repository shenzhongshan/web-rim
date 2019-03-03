import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
/* eslint-disable */
const menugroup = {
  template: '<router-view></router-view>'
}
const nullpage = {
  template: '<p></P>'
}
export default [{
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: false,
        title: '首页',
        notCache: true,
        icon: 'md-home'
      },
      component: () => import('@/view/single-page/home')
    }]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [{
      path: 'message_page',
      name: 'message_page',
      meta: {
        icon: 'md-notifications',
        title: '消息中心'
      },
      component: () => import('@/view/single-page/message/index.vue')
    }]
  },
  {
    path: '/prj-explore',
    name: 'prjExplore',
    meta: {
      icon: 'md-planet',
      title: route => `项目 - ${route.query.name}`,
      hideInMenu: true
    },
    component: () => import('@/view/show-prj/show-main.vue')
  },
  {
    path: '/prj',
    name: 'prj',
    meta: {
      hideInBread: false,
      hideInMenu: true
    },
    component: Main,
    children: [{
      path: 'show-prj',
      name: 'show-prj',
      meta: {
        icon: 'md-planet',
        title: route => `项目 - ${route.query.name}`
      },
      component: () => import('@/view/show-prj/show-main.vue')
    }]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [{
      path: 'error_logger_page',
      name: 'error_logger_page',
      meta: {
        icon: 'ios-bug',
        title: '错误收集'
      },
      component: () => import('@/view/single-page/error-logger.vue')
    }]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  {
    path: '/scheme',
    name: 'scheme',
    meta: {
      icon: 'md-planet',
      title: '方案管理'
    },
    component: Main,
    children: [{
        path: 'projectShow',
        name: 'projectShow',
        meta: {
          icon: 'md-funnel',
          title: '项目展示'
        },
        component: nullpage
      },
      {
        path: 'saveProject',
        name: 'saveProject',
        meta: {
          icon: 'md-funnel',
          command: 'saveProject',
          title: '保存项目'
        }
      },
      {
        path: 'level_1_3',
        name: 'level_1_3',
        meta: {
          icon: 'md-funnel',
          command: 'saveProject',
          title: '查看纵断面'
        }
      },
      {
        path: 'level_1_4',
        name: 'level_1_4',
        meta: {
          icon: 'md-funnel',
          title: '提取纵断面'
        },
        component: nullpage
      },
      {
        path: 'level_1_5',
        name: 'level_1_5',
        meta: {
          icon: 'md-funnel',
          title: '提取横断面'
        },
        component: nullpage
      },
      {
        path: 'level_1_6',
        name: 'level_1_6',
        meta: {
          icon: 'md-funnel',
          title: '查看工程数量'
        },
        component: nullpage
      },
      {
        path: 'level_1_7',
        name: 'level_1_7',
        meta: {
          icon: 'md-funnel',
          title: '生成行政区划表'
        },
        component: nullpage
      }
    ]
  },
  {
    path: '/data_source',
    name: 'dataSource',
    meta: {
      icon: 'md-images',
      title: '数据源'
    },
    component: Main,
    children: [{
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '加载'
        },
        component: menugroup,
        children: [{
            path: 'level_2_1_1',
            name: 'level_2_1_1',
            meta: {
              icon: 'md-funnel',
              title: '加载网络地图'
            },
            component: nullpage
          },
          {
            path: 'level_2_1_2',
            name: 'level_2_1_3',
            meta: {
              icon: 'md-funnel',
              title: '加载KML/FLY文件'
            },
            component: nullpage
          },
          {
            path: 'level_2_1_3',
            name: 'level_2_1_3',
            meta: {
              icon: 'md-funnel',
              title: '从服务器加载...'
            },
            component: nullpage
          }
        ]
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '导出'
        },
        component: menugroup,
        children: [{
          path: 'level_2_2_1',
          name: 'level_2_2_1',
          meta: {
            icon: 'md-funnel',
            title: '导出KML'
          },
          component: nullpage
        }, {
          path: 'level_2_2_2',
          name: 'level_2_2_2',
          meta: {
            icon: 'md-funnel',
            title: '导出FLY'
          },
          component: nullpage
        }]
      }
    ]
  },
  {
    path: '/dyna_analog',
    name: 'dynaAnalog',
    meta: {
      icon: 'md-pulse',
      title: '动态模拟'
    },
    component: Main,
    children: [{
        path: 'level_3_1',
        name: 'level_3_1',
        meta: {
          icon: 'md-funnel',
          title: '横剖面图'
        },
        component: nullpage
      },
      {
        path: 'level_3_2',
        name: 'level_3_2',
        meta: {
          icon: 'md-funnel',
          title: '交通模拟'
        },
        component: nullpage
      },
      {
        path: 'level_3_3',
        name: 'level_3_3',
        meta: {
          icon: 'md-funnel',
          title: '飞行鸟瞰'
        },
        component: nullpage
      },
      {
        path: 'level_3_4',
        name: 'level_3_4',
        meta: {
          icon: 'md-funnel',
          title: '进度模拟'
        },
        component: nullpage
      }
    ]
  },
  {
    path: '/person',
    name: 'person',
    meta: {
      icon: 'md-people',
      title: '人员管理',
      hideInMenu: false
    },
    component: Main,
    children: [{
      path: 'index',
      name: 'index',
      meta: {
        icon: 'md-people',
        title: '人员管理',
        hideInMenu: false
      },
      component: nullpage
    }]
  }
]
