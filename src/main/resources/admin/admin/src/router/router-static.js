import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import goutong from '@/views/modules/goutong/list'
    import kehu from '@/views/modules/kehu/list'
    import kehujifen from '@/views/modules/kehujifen/list'
    import kehuxiansuo from '@/views/modules/kehuxiansuo/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dictionaryGoutong from '@/views/modules/dictionaryGoutong/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryKehujifen from '@/views/modules/dictionaryKehujifen/list'
    import dictionaryKehuxiansuo from '@/views/modules/dictionaryKehuxiansuo/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGoutong',
        name: '沟通类型',
        component: dictionaryGoutong
    }
    ,{
        path: '/dictionaryJinyong',
        name: '是否禁用',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryKehujifen',
        name: '增加类型',
        component: dictionaryKehujifen
    }
    ,{
        path: '/dictionaryKehuxiansuo',
        name: '线索类型',
        component: dictionaryKehuxiansuo
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/goutong',
        name: '沟通记录',
        component: goutong
      }
    ,{
        path: '/kehu',
        name: '客户',
        component: kehu
      }
    ,{
        path: '/kehujifen',
        name: '客户积分',
        component: kehujifen
      }
    ,{
        path: '/kehuxiansuo',
        name: '客户线索',
        component: kehuxiansuo
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
