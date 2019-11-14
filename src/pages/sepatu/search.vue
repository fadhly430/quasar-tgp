<template>
    <div class="q-pa-md">
        <div class="column">
            <div class="column items-center">
                <div class="col">
                    <div class="text-h6">SEPATU SNEAKER (SN)</div>
                </div>
                <div class="col-4">
                    <div class="text-left text--subtitle1">SN Series adalah serial sneaker dan merupakan seri perdana yang dikeluarkan oleh </div>
                    <div class="text-left text--subtitle1"> tim TG Project. Temukan sepatu kasual favorit kamu dengan harga terjangkau di sini.</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
        
        <!-- isi -->
            <div class="row justify-center ">
                
                <div class="col-3 q-gutter-xl padding" v-for="item in images" :key="item.id">
                    <q-card @click="show(item)">
                    <img :src="item.ImgShoes" >
                    <q-card-actions align="around">

                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text-subtitle1">{{item.NamaShoes}}</div>
                            </div>
                        </div>
                        <div class="row justify-center" style="height:10px"/>
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center" >Rp. {{item.HargaShoes}}</div>
                            </div>
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
import product from '../../api/barang/shoes';
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
      let getSearch = localStorage.getItem('search')
      let self=this;
      product.getBarangShoes(window, getSearch)
      .then(function(result){
          console.log("result:", result)
          return self.images=result.data
      })
      .catch(function (err) {
          console.log(err);
      });
          
      },
  
  methods:{
      show(item){
          localStorage.setItem('idbarang',item.id)
          this.$router.push('/ordershoes')
      },
     getBarangShoes(){
          let getSearch = localStorage.getItem('search')
          let self=this;
          product.getBarangShoes(window, getSearch)
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
.newitem
  width: 200px
  height: 200px

.padding
    padding: 15px
</style>