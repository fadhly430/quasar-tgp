<template>
  <q-layout view="hhh lpR fff" class="bg-white">

    
    <q-header elevated class="bg-grey-10 text-white " height-hint="100">
      <q-toolbar align="center">
        <div class="absolute-center text-bold">
        <q-toolbar-title >
          <q-avatar>
            <img src="/statics/IconLogo_Transparent_300x.png">
          </q-avatar >
          TG Project
        </q-toolbar-title>
        </div>
        <q-space/>

       <q-item clickable tag="a" target="" @click="$router.replace('/account')" >
         <q-item-section>
            <q-item-label>Account</q-item-label>
             <q-tooltip content-class="" :offset="[10, 10]">
          Silahkan masuk atau daftar !
        </q-tooltip>
          </q-item-section>
       </q-item>

      <q-item clickable tag="a" target="">
         <q-item-section>
            <q-item-label>Search</q-item-label>
          </q-item-section>
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-input    v-model="search" input-class="text-right" class="q-ml-md">
              <template v-slot:append>
                <q-icon name="search" @click="findByName()" />
              </template>
            </q-input>
          </q-menu>
      </q-item>

       <q-item  flat round clickable @click="drawer = !drawer">
         <q-item-section>
            <q-item-label>Cart</q-item-label>
          </q-item-section>
          <q-item-section avatar>
          <q-icon name="shopping_cart"/>
          </q-item-section>

          <q-menu transition-show="jump-down" transition-hide="jump-up">
             <q-list style="min-width:300px">
               <div class="column" style="height:15px"/>
              <div class="row items-center">
                <div class="col-1 q-gutter-xs"/>
                <div class="col-2">
                  <q-card>
              <q-img :src="images.ImgApparel"/>
                  </q-card>
                </div>   
                


                <div class="col-1 q-gutter-sm"/>

                <div class="col-3">
                  <div class="text-center text-H12" > {{images.NamaApparel}} </div>
                </div>

                <div class="col-1 q-gutter-md"/>

                <div class="col-3">
                  <div class="text-center text-H11" >Rp.{{images.HargaApparel}}</div>
   
                <div class="col-1 q-gutter-sm"/>
                 </div>
        <div class="cart-items">
        </div>
                <div class="col-1">
                  <q-btn class="gt-xs" size="10px" flat dense round icon="delete"/>
                </div>
              </div>
              <div class="column" style="height:20px"/>
              <div class="row justify-center">
                <div class="col-10">
                   <q-item clickable tag="a" target="" @click="$router.replace('/paymentapparel')" >
                <q-item-section>
                  <q-btn push color="primary" label="Beli Sekarang" class="full-width" icon="card_giftcard" />
                  </q-item-section>
                </q-item>
                </div>
              </div>
              <div class="column" style="height:15px"/>

             </q-list>
          </q-menu>
       </q-item>

      </q-toolbar>
<!-- menu -->
      <div class="column" style="height: 10px"/>
      <q-tabs class="text-white" align="center" v-model="tab" inline-label >
        
        <q-tab stretch flat label="HOME" @click="$router.replace('/')" />

        <q-btn class="text-grey-4"  flat label="SEMUA PRODUCT"> 
          
            <q-menu transition-show="jump-down" transition-hide="jump-up">

              <q-list style="min-width:150px" class="text-center">
                <q-item clickable v-close-popup  @click="$router.replace('/apparel')">
                  <q-item-section>
                    <q-item-label>Apparel</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="$router.replace('/wallet')">
                  <q-item-section>
                    <q-item-label>Wallet</q-item-label>
                  </q-item-section>
                </q-item>

              <q-item clickable v-close-popup @click="$router.replace('/sepatu') ">
                <q-item-section>
                  <q-item-label>Shoes</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            </q-menu>
        </q-btn>
       <div>
        <q-tab stretch flat label="HUBUNGI TG PROJECT" @click="$router.replace('/hubungi') "/>
        <q-tooltip content-class="" :offset="[10, 10]">
          Silahkan hubungi kami disini !
        </q-tooltip>
       </div>
        <div>
        <q-tab stretch flat label="TENTANG TG PROJECT" @click="$router.replace('/about') "/>
        <q-tooltip content-class="" :offset="[10, 10]">
           Kenali kami lebih baik!
        </q-tooltip>
</div>

      </q-tabs>
    </q-header>
<!--  -->
    
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black" >
     <q-separator color="blue-grey-3" inset />
     <div class="column">
       <div class="column" style="height: 70px"/>
         <div class="row responsive" style="height: 200px">
            <div class="col-1 q-gutter-xl"/>
            <div class="col-4">
              <div class="text-left text-overline">TENTANG KAMI</div>
              <div class="text-left text-caption">adalah perusahaan internasional Indonesia yang bergerak 
                    dalam bidang desain, pengembangan, pemasaran dan penjualan alas kaki, pakaian, dan dompet. TG Project 
                    adalah produk dari keingintahuan pemiliknya dan kecintaannya pada fashion. Mereknya telah memberinya 
                    kesempatan untuk bepergian ke berbagai negara dan mendapatkan undangan ke berbagai acara mode yang 
                    didominasi oleh pameran internasional.</div>
            </div>
            <div class="col-1"/>
            <div class="col-2">
              <div class="text-left text-overline">MENU FOOTER</div>
              <div class="text-left text-caption">AllProduk</div>
              <div class="text-left text-caption">About</div>
              <div class="text-left text-caption">Contact Us</div>
            </div>
            <div class="col-1"/>
            <div class="col-3 q-gutter-xs">
              <div class="text-left text-overline">NEWS LETTER</div>
              <div class="text-left text-caption">Berlangganan untuk menerima pembaruan,</div>
              <div class="text-left text-caption">akses ke penawaran eksklusif, dan banyak lagi.</div>
              <div style="height: 10px"/>
               <q-input outlined v-model="email" placeholder="Enter your email addres"  style="300px" />
               <div style="height: 10px"/>
               <q-btn style="background: #283b39; color: white" label="Langganan" type="submit" @click="onSubmit()"/>
            </div>
         </div> 
         
         <div class="row" style="height: 100px">
          <div class="col-1 q-gutter-xl "/>
          <div class="col-10">
            <div class="column" style="100px">
              <div class="col-1">
                <div class="text-left text-overline">Kenali kami lebih baik dengan mengikuti pegangan media</div>
                <div class="text-left text-overline">sosial kami!</div>
              </div>
            </div> 
         </div>
        </div>

          <div class="column" style="240px">
            <div class="row">
              <div class="col-1 q-gutter-xl "/>
              <div class="col1">
                <div class="text-left text-overline">@TGProject</div>
              </div>
              <div class="col-10"/>
              <div class="col-auto justify-end">
                <q-img src="./statics/master.png" style="width:30px"/>
                <q-img src="./statics/visa.png" style="width:30px"/>
              </div>
            </div>
          </div>

         </div>
    </q-footer>

  </q-layout>
</template>

<script>

import promote from '../api/promote/promote';
import containeer from '../api/container/container';
import {downloadImage} from '../api/upload/index';
import productapparel from '../api/barang/apparel';
import productwallet from '../api/barang/wallet';
import productshoes from '../api/barang/shoes';
// import cart from '../api/cart/index';
export default {
  data () {
    return {
       tab: 'mails',
       email: "",
       drawer: false,
       images:[],
        model: null,
       text: '',
       search:[]
    }
  },

   

  methods: {
        onSubmit(){
          let self = this;
          promote.postmessagedata(window, self.email).then(function(result){
            console.log(response)
            return self.$router.push("/");
          })
          .catch(function (error) {
          console.log(error);
         });
         this.email = null
         alert('Terimakasih anda sudah berlangganan')
        },

        findByName(search) {
    console.log(this.search)
    localStorage.setItem('search', this.search)
    return this.$router.push("/search")
    },


      show(images){
          localStorage.setItem('idbarang',images.id)
          this.$router.push('/paymentapparel')
      }
    }

  }
</script>

<style lang="sass" scoped>

.visa
  height: 50px
  width:  80px  
</style>
