<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide :name="1" img-src="/statics/apparel/j5.jpg"/>
                        
                    </q-carousel>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">Anti Mabu Bomber</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. 465.000</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">Anti Mabu Bomber adalah pilihan tepat tentunya tidak salah alamat apabila kamu 
                    ingin memakai jaket di keseharianmu. Buat naik motor? Cakep! Buat ke party? Cakep! Buat pamer pas pulang kampong 
                    lebaran? Cakep! Ke acara-acara indie artsy? Cakep! Buat pacaran? PASTINYA CAKEP LAAAH~~</div>
                <div style="height: 20px"/>

                <div style="height: 40px"/>
                <q-select outlined v-model="model" :options="baju" label="Ukuran" />
                <div style="height: 20px"/>
                <div class="row">
                    <div class="col-3">
                        <q-input filled type="number" v-model="jumlah" label="Jumlah" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Masukan jumlah',
                                val => val > 0 && val < 100 || 'Masukan Jumlah Order'
                        ]"/>
                    </div>
                </div>
                <div style="height: 20px"/>
                <q-btn outline color="primary" label="Masukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="$router.replace('/payantimabubomber')"/>

            </div> 
        </div>
        <div class="column" style="height: 50px"/>
    </div>
</template>

<script>
import containeer from '../../api/container/container';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/barang/apparel';
export default {
    data () {
    return {
        images:[],
        slide: 1,
        model: null,
        baju: ['S','M','L','XL']
    }
  },


  
  computed: {
      getImgs(){
          this.getImg()
      }
  },

  beforeCreate(){
      let getId= localStorage.getItem('id');
      console.log(getId)

      let self=this;
      product.getBarangApparel(window,getId)
      .then(function (result){
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
          localStorage.setItem('id',item.id)
          
      },
      
  }
</script>

<style lang="sass" scoped>

</style>