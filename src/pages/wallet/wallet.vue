<template>
    <div class="q-pa-md">
        <div class="column">
            <div class="column items-center">
                <div class="col">
                    <div class="text-h6">Wallet (WT)</div>
                </div>
                <div class="col-4">
                    <div class="text-left text-caption">WT Series adalah serial Wallet dan merupakan seri perdana yang dikeluarkan oleh </div>
                    <div class="text-left text-caption"> tim TG Project. Temukan wallet kasual favorit kamu dengan harga terjangkau di sini.</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/><!-- jarak --->
        <!-- isi -->
            <div class="row justify-center ">
                
                <div class="col-3 q-gutter-xl padding" v-for="item in images" :key="item.id">
                    <q-card flat @click="show(item)" >
                    <img :src="item.ImgWallet" >
                    <q-card-actions align="around">
                        <div class="column">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text-subtitle1">{{item.NamaWallet}}</div>
                            </div>
                        </div>
                        <div class="row justify-center" style="height:10px"/>
                        <!-- <div class="row justify-center"> -->
                            <!-- <div class="col"> -->
                                <div class="text-center" >Rp. {{item.HargaWallet}}</div>
                            <!-- </div> -->
                        <!-- </div> -->
                        </div>
                    </q-card-actions>
                    </q-card>
                </div>

            </div>      
        <!--  -->

            <div class="column" style="height: 70px"/>

            <div class="q-pa-lg flex flex-center">
                <q-pagination v-model="current" color="purple" :max="10" :max-pages="3" :boundary-numbers="true"                >
                </q-pagination>
            </div>
            <div class="column" style="height: 80px"/>

        </div>
    </div>
</template>

<script>
import containeer from '../../api/container/container';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/barang/wallet';
export default {
  data () {
    return {
        images:[],
        current: 1
    }
  },
  
  computed: {
      getImgs(){
          this.getImg()
      }
  },

  beforeCreate(){
      let self=this;
      product.getBarangWallet(window).then(function (result){
          console.log(result);
          self.images=result
      })
      .catch(function (err)
      {
          console.log(err);
      });
  },
  
  methods:{
      show(item){
          localStorage.setItem('idbarang',item.id)
          this.$router.push('/orderwallet')
      },
       getBarangWallet(){
          let getSearch = localStorage.getItem('search')
          let self=this;
          product.getBarangWallet(window, getSearch)
          .then(function(result){
              console.log("result:", result)
              return self.images=result.data
          })
          .catch(function (err){
              console.log(err);
          });
    }
  }
  


}
</script>

<style lang="sass" scoped>
.padding
    padding: 15px

.newitem
  width: 200px
  height: 200px
</style>