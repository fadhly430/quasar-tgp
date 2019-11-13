
const routes = [  
  {
    path: '/TGProject',
    component: () => import('layouts/copy.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'apparel', component: () => import('pages/apparel/apparel.vue') },
      { path: 'wallet', component: () => import('pages/wallet/wallet.vue') },
      { path: 'sepatu', component: () => import('pages/sepatu/sepatu.vue') },
      { path: 'hubungi', component: () => import('pages/hubungi.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'account', component: () => import('pages/account.vue') },
      { path: 'regis', component: () => import('pages/regis.vue') },
      { path: 'laccount', component: () => import('pages/pageacount.vue') },
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'apparel', component: () => import('pages/apparel/apparel.vue') },
      { path: 'wallet', component: () => import('pages/wallet/wallet.vue') },
      { path: 'sepatu', component: () => import('pages/sepatu/sepatu.vue') },
      { path: 'paymentapparel', component: () => import('pages/apparel/paymentapparel.vue') },
      { path: 'hubungi', component: () => import('pages/hubungi.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'account', component: () => import('pages/account.vue') },
      { path: 'regis', component: () => import('pages/regis.vue') },
      { path: 'laccount', component: () => import('pages/pageacount.vue') },
      { path: 'orderapparel', component: () => import('pages/apparel/orderapparel.vue') },
      { path: 'orderwallet', component: () => import('pages/wallet/orderwallet.vue') },
      { path: 'ordershoes', component: () => import('pages/sepatu/ordershoes.vue') },
    ]
  },
  {
    path: '/owner',
      component: () => import('layouts/dashboard/owner.vue'),
      children: [
        { path: '', component:() => import('pages/admin/index.vue')},
        { path: 'tabelapparel', component:() => import('pages/admin/otabelapparel.vue')},
        { path: 'tabelwallet', component:() => import('pages/admin/otabelwallet.vue')},
        { path: 'tabelsepatu', component:() => import('pages/admin/otabelsepatu.vue')},
        { path: 'message', component:() => import('pages/admin/message.vue')},
        { path: 'order', component:() => import('pages/admin/order.vue')},
        { path: 'login', component:() => import('pages/admin/login.vue')},
        { path: 'addapparel', component:() => import('pages/admin/postapparel.vue')},
        { path: 'addwallet', component:() => import('pages/admin/postwallet.vue')},
        { path: 'addsepatu', component:() => import('pages/admin/postsepatu.vue')},
      ]
 
  },
  {
   path: '/admin',
    component: () => import('layouts/dashboard/admin.vue'),
    children: [
      { path: '', component:() => import('pages/admin/tabelapparel.vue')},
      { path: 'tabelwallet', component:() => import('pages/admin/tabelwallet.vue')},
      { path: 'tabelsepatu', component:() => import('pages/admin/tabelsepatu.vue')},
      { path: 'message', component:() => import('pages/admin/message.vue')},
      { path: 'order', component:() => import('pages/admin/order.vue')},
      { path: 'login', component:() => import('pages/admin/login.vue')},
      { path: 'addapparel', component:() => import('pages/admin/postapparel.vue')},
      { path: 'addwallet', component:() => import('pages/admin/postwallet.vue')},
      { path: 'addsepatu', component:() => import('pages/admin/postsepatu.vue')},


    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
