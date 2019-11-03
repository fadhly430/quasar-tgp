
const routes = [  
  {
    path: '/TGProject',
    component: () => import('layouts/copy.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'apparel', component: () => import('pages/apparel/apparel.vue') },
      { path: 'wallet', component: () => import('pages/wallet/wallet.vue') },
      { path: 'sepatu', component: () => import('pages/sepatu/sepatu.vue') },
      { path: 'payment', component: () => import('pages/payment.vue') },
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
      { path: 'payment', component: () => import('pages/payment.vue') },
      { path: 'hubungi', component: () => import('pages/hubungi.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'account', component: () => import('pages/account.vue') },
      { path: 'regis', component: () => import('pages/regis.vue') },
      { path: 'laccount', component: () => import('pages/pageacount.vue') },
 //sepatu
      { path: 'makara-coral', component: () => import('pages/sepatu/makaracoral.vue') },
      { path: 'nolan-chery', component: () => import('pages/sepatu/nolancherywhite.vue') },
      { path: 'nolan-beige', component: () => import('pages/sepatu/nolanbeigegray.vue') },
      { path: 'rua-tosca', component: () => import('pages/sepatu/ruawhitetosca.vue') },
      { path: 'rua-fushia', component: () => import('pages/sepatu/ruafushia.vue') },
      { path: 'nolan-coral', component: () => import('pages/sepatu/nolancoral.vue') },
      { path: 'nolan-full', component: () => import('pages/sepatu/nolanfullwhite.vue') },
      { path: 'saka-smoke', component: () => import('pages/sepatu/sakasmoke.vue') },
      { path: 'niliwatu', component: () => import('pages/sepatu/niliwatu.vue') },
      { path: 'makara-reef', component: () => import('pages/sepatu/makarareef.vue') }, 
 //wallet
      { path: 'keiocivision', component: () => import('pages/wallet/keiocision.vue') },
      { path: 'keionami', component: () => import('pages/wallet/keionami.vue') },
      { path: 'keiohexablack', component: () => import('pages/wallet/keiohexablack.vue') },
      { path: 'clauszara', component: () => import('pages/wallet/clauszara.vue') },
      { path: 'adlermojave', component: () => import('pages/wallet/adlermojave.vue') },
      { path: 'liviamac', component: () => import('pages/wallet/liviamac.vue') },
      { path: 'clausnami', component: () => import('pages/wallet/clausnami.vue') },
      { path: 'carrieruler', component: () => import('pages/wallet/carrieruler.vue') },
      { path: 'adlercaren', component: () => import('pages/wallet/adlercaren.vue') },
      { path: 'dwightcision', component: () => import('pages/wallet/dwightcision.vue') },
  // apparel
      { path: 'crazyasiancoach', component: () => import('pages/apparel/crazyasiancoach.vue') },
      { path: 'taigacoach', component: () => import('pages/apparel/taigacoach.vue') },
      { path: 'gomenasaibomber', component: () => import('pages/apparel/gomenasaibomber.vue') },
      { path: 'rilekrangerbomber', component: () => import('pages/apparel/rilekrangerbomber.vue') },
      { path: 'antimabubomber', component: () => import('pages/apparel/antimabubomber.vue') },
      { path: 'neotokyobomber', component: () => import('pages/apparel/neotokyobomber.vue') },
      { path: 'naisubomber', component: () => import('pages/apparel/naisubomber.vue') },
      { path: 'okeboskuhsweatshirt', component: () => import('pages/apparel/okeboskuhsweatshirt.vue') },
      { path: 'jutsuitsweatshirt', component: () => import('pages/apparel/jutsuitsweatshirt.vue') },
      { path: 'koreazipperhoodie', component: () => import('pages/apparel/koreazipperhoodie.vue') },
    ]
  },
  {
    path: '/owner',
      component: () => import('layouts/dashboard/owner.vue'),
      children: [
        { path: '', component:() => import('pages/admin/index.vue')},
        { path: 'tabel', component:() => import('pages/admin/tabel.vue')},
        { path: 'message', component:() => import('pages/admin/message.vue')},
        { path: 'order', component:() => import('pages/admin/order.vue')},
        { path: 'login', component:() => import('pages/admin/login.vue')},
      ]
 
  },
  {
   path: '/admin',
    component: () => import('layouts/dashboard/admin.vue'),
    children: [
      { path: '', component:() => import('pages/admin/tabel.vue')},
      { path: 'message', component:() => import('pages/admin/message.vue')},
      { path: 'order', component:() => import('pages/admin/order.vue')},
      { path: 'login', component:() => import('pages/admin/login.vue')}
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
