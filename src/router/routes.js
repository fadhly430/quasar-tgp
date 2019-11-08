
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

      //Payment wallet

      { path: 'payadlercaren', component: () => import('pages/wallet/payment/payadlercaren.vue') },
      { path: 'paykeiocision', component: () => import('pages/wallet/payment/paykeiocision.vue') },
      { path: 'paykeionami', component: () => import('pages/wallet/payment/paykeionami.vue') },
      { path: 'paykeiohexablack', component: () => import('pages/wallet/payment/paykeiohexablack.vue') },
      { path: 'payclauszara', component: () => import('pages/wallet/payment/payclauszara.vue') },
      { path: 'payadlermojave', component: () => import('pages/wallet/payment/payadlermojave.vue') },
      { path: 'payliviamac', component: () => import('pages/wallet/payment/payliviamac.vue') },
      { path: 'payclausnami', component: () => import('pages/wallet/payment/payclausnami.vue') },
      { path: 'paycarrieruler', component: () => import('pages/wallet/payment/paycarrieruler.vue') },
      { path: 'paydwightcision', component: () => import('pages/wallet/payment/paydwightcision.vue') },

      // payment sepatu

      { path: 'paymakara-coral', component: () => import('pages/sepatu/payment/paymakaracoral.vue') },
      { path: 'paynolan-chery', component: () => import('pages/sepatu/payment/paynolancherywhite.vue') },
      { path: 'paynolan-beige', component: () => import('pages/sepatu/payment/paynolanbeigegray.vue') },
      { path: 'payrua-tosca', component: () => import('pages/sepatu/payment/payruawhitetosca.vue') },
      { path: 'payrua-fushia', component: () => import('pages/sepatu/payment/payruafushia.vue') },
      { path: 'paynolan-coral', component: () => import('pages/sepatu/payment/paynolancoral.vue') },
      { path: 'paynolan-full', component: () => import('pages/sepatu/payment/paynolanfullwhite.vue') },
      { path: 'paysaka-smoke', component: () => import('pages/sepatu/payment/paysakasmoke.vue') },
      { path: 'payniliwatu', component: () => import('pages/sepatu/payment/payniliwatu.vue') },
      { path: 'paymakara-reef', component: () => import('pages/sepatu/payment/paymakarareef.vue') }, 
      
      // payment Appalre

      { path: 'paycrazyasiancoach', component: () => import('pages/apparel/payment/paycrazyasiancoach.vue') },
      { path: 'paytaigacoach', component: () => import('pages/apparel/payment/paytaigacoach.vue') },
      { path: 'paygomenasaibomber', component: () => import('pages/apparel/payment/paygomenasaibomber.vue') },
      { path: 'payrilekrangerbomber', component: () => import('pages/apparel/payment/payrilekrangerbomber.vue') },
      { path: 'payantimabubomber', component: () => import('pages/apparel/payment/payantimabubomber.vue') },
      { path: 'payneotokyobomber', component: () => import('pages/apparel/payment/payneotokyobomber.vue') },
      { path: 'paynaisubomber', component: () => import('pages/apparel/payment/paynaisubomber.vue') },
      { path: 'payokeboskuhsweatshirt', component: () => import('pages/apparel/payment/payokeboskuhsweatshirt.vue') },
      { path: 'payjutsuitsweatshirt', component: () => import('pages/apparel/payment/payjutsuitsweatshirt.vue') },
      { path: 'paykoreazipperhoodie', component: () => import('pages/apparel/payment/paykoreazipperhoodie.vue') },

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
      { path: 'upload', component:() => import('pages/admin/upload.vue')},
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
