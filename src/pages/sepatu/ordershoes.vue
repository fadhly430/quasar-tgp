<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-img :src="images.ImgShoes"/>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">{{images.NamaShoes}}</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. {{images.HargaShoes}}</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">{{images.KeteranganShoes}}</div>
                <div style="height: 20px"/>

                <div style="height: 40px"/>
                
                
                <q-btn outline color="primary" label="Masukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="show(item)"/>

            </div> 
        </div>
        <div class="column" style="height: 50px"/>
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
        slide: 1,
        model: null,
    }
  },


  
  computed: {
      getImgs(){
          this.getImg()
      }
  },

  beforeCreate(){
      let getId= localStorage.getItem('idbarang');
      console.log(getId)

      let self=this;
      product.getbyidShoes(window,getId)
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
          localStorage.setItem('idorder',item.id)
          this.$router.push('/payment')
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
