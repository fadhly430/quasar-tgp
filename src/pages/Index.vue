<template>
  <div class="q-pa-md">
  <q-card>
   <q-carousel fluid class="sizebanner"
      animated
      v-model="slide"
      arrows
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide class="responsive" name="1" img-src="./statics/1.jpg"/>
      <q-carousel-slide class="responsive" name="2" img-src="./statics/2.jpg"/>
      <q-carousel-slide class="responsive" name="3" img-src="./statics/3.jpg"/>
      <q-carousel-slide class="responsive" name="4" img-src="./statics/4.jpg"/>
      <q-carousel-slide class="responsive" name="5" img-src="./statics/5.jpg"/>

    </q-carousel>
  </q-card>
      <div class="column" style="height: 30px"/>
        <div class="column justify-center">
            <div class="col">
              <div class="text-h6 text-weight-regular text-center">Mendemokrasikan industri fashion dengan menjadi tren </div>
              <div class="text-h6 text-weight-regular text-center">di Indonesia</div>
            </div>
            <div class="column" style="height: 30px"/>
            <div class="col-4 flex flex-center">
            <q-img src="./statics/app-logo-128x128.png" class="deg responsive"/>
            </div>
        </div>
      <div class="column" style="height: 30px"/> <!-- jarak --->
  
    <div class="q-gutter-md row justify-center">
      
        <div class="col-3 ">
          <q-card>
          <q-img src="./statics/KUSKO1.jpg" style="width: 100%" @click="$router.replace('/sepatu')"/>
          </q-card>
        </div>
        <div class="col-xs-1 q-col-gutter-xl"/>
        <div class="col-3 ">
          <q-card>
          <q-img src="./statics/ZOE_2.jpg" style="width: 100%" @click="$router.replace('/apparel')"/>
          </q-card>
        </div>
      
        <div class="col-xs-1 q-col-gutter-x-xl" />
        <div class="col-3 ">
          <q-card>
          <q-img src="./statics/SAKA2.jpg" style="width: 100%" @click="$router.replace('/wallet')"/>
          </q-card>
        </div>
    </div>

    <div class="column" style="height: 50px"/> <!-- jarak --->

    <div class="row items-center">
      <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
      <div class="col-2">
        <div class="text-h5 text-center text-weight-regular"> New Apparel Items </div>
      </div>
       <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
    </div>

    <div class="column" style="height: 50px"/> <!-- jarak --->
    
    <div class="q-gutter-md row justify-center">
      

      <div class="col-2" v-for="itema in imagesa" :key="itema.id">
        <q-card  @click="show(itema)">
          <img :src="itema.ImgApparel">
          <q-card-actions align="around">
            <div class="row justify-center">
              <div class="col">
                <div class="text-center text--subtitle1">{{itema.NamaApparel}}</div>
                <div class="text-center" >Rp. {{itema.HargaApparel}}</div>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>

      

    </div>
<!-- new wallet -->
    <div class="column" style="height: 50px"/> <!-- jarak --->

    <div class="row items-center">
      <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
      <div class="col-2">
        <div class="text-h5 text-center text-weight-regular"> New Wallet Items </div>
      </div>
       <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
    </div>

    <div class="column" style="height: 50px"/> <!-- jarak --->
    
    <div class="q-gutter-md row justify-center">
      

      <div class="col-2" v-for="itemw in imagesw" :key="itemw.id">
        <q-card  @click="show(itemw)">
          <img :src="itemw.ImgWallet">
          <q-card-actions align="around">
            <div class="row justify-center">
              <div class="col">
                <div class="text-center text--subtitle1">{{itemw.NamaWallet}}</div>
                <div class="text-center" >Rp. {{itemw.HargaWallet}}</div>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>

      

    </div>

    <div class="column" style="height: 50px"/> <!-- jarak --->

    <div class="row items-center">
      <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
      <div class="col-2">
        <div class="text-h5 text-center text-weight-regular"> New Shoes Items </div>
      </div>
       <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
    </div>

    <div class="column" style="height: 50px"/> <!-- jarak --->
    
    <div class="q-gutter-md row justify-center">
      

      <div class="col-2" v-for="itemss in imagess" :key="itemss.id">
        <q-card  @click="show(itemss)">
          <img :src="itemss.ImgShoes">
          <q-card-actions align="around">
            <div class="row justify-center">
              <div class="col">
                <div class="text-center text--subtitle1">{{itemss.NamaShoes}}</div>
                <div class="text-center" >Rp. {{itemss.HargaShoes}}</div>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>

      

    </div>

  
    <div class="column" style="height: 100px"/><!-- jarak --->


  </div>
</template>
 

<script>
import containeer from '../api/container/container';
import {downloadImage} from '../api/upload/index';
import producta from '../api/barang/apparel';
import productw from '../api/barang/wallet';
import products from '../api/barang/shoes';

export default {
   data () {
    return {
      slide: '1',

      imagesa:[],
      imagesw:[],
      imagess:[],
    }
  },

  computed: {
      getImgs(){
          this.getImg()
      }
  },

  beforeCreate(){
      let self=this;

      producta.getBarangApparel(window).then(function (result){
          console.log(result);
           for (let i = 0; i < 5; i++) {
            self.imagesa.push(result[i])
          }
      })

      productw.getBarangWallet(window).then(function (result){
          console.log(result);
           for (let i = 0; i < 5; i++) {
            self.imagesw.push(result[i])
          }
      })

      products.getBarangShoes(window).then(function (result){
          console.log(result);
           for (let i = 0; i < 5; i++) {
            self.imagess.push(result[i])
          }
      })
      .catch(function (err)
      {
          console.log(err);
      });
  },

  methods:{
      show(itema){
          localStorage.setItem('idbarang',item.id)
          this.$router.push('/orderapparel')
      },

      show(itemw){
          localStorage.setItem('idbarang',item.id)
          this.$router.push('/orderwallet')
      },

      show(items){
          localStorage.setItem('idbarang',item.id)
          this.$router.push('/ordershoes')
      },
      
      getBarangApparel(){
          let getSearch = localStorage.getItem('search')
          let self=this;
          producta.getBarangApparel(window, getSearch)
          .then(function(result){
              console.log("result:", result)
              return self.imagesa=result.data
          })
          .catch(function (err){
              console.log(err);
          });
      },
      
      getBarangWallet(){
          let getSearch = localStorage.getItem('search')
          let self=this;
          producta.getBarangApparel(window, getSearch)
          .then(function(result){
              console.log("result:", result)
              return self.imagesw=result.data
          })
          .catch(function (err){
              console.log(err);
          });
      },

      getBarangShoes(){
          let getSearch = localStorage.getItem('search')
          let self=this;
          producta.getBarangApparel(window, getSearch)
          .then(function(result){
              console.log("result:", result)
              return self.imagess=result.data
          })
          .catch(function (err){
              console.log(err);
          });
      },
  }    
      
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.deg
  height: 100px
  width: 200px

.sizebanner
  width: auto
  height: 500px

.newitem
  width: 200px
  height: 200px
</style>
