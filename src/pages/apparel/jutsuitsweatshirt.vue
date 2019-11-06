<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide :name="1" img-src="/statics/apparel/j9.jpg"/>
                        <q-carousel-slide :name="2" img-src="/statics/apparel/j9-1.jpg"/>
                    </q-carousel>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">Jutsu It Sweatshirt</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. 330.000</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">Jutsu It Hoodie merupakan produk andalan kami untuk melawan 
                    suhu dingin-dingin gimana gitu yang biasanya bikin mood untuk pengen dipeluk. 
                    Hangat ena ena, chick magnet, insyaallah artsy edgy, tapi ga trippy yah!!</div>
                <div style="height: 20px"/>

                <div class="text-left text-body2">Detail:</div>
                
                <div class="row">
                    <div class="col-1"/>
                    <div class="col-1">
                        <div class="text-left text-h3">.</div>
                        <div class="text-left text-h3">.</div>
                        <div class="text-left text-h3">.</div>
                    </div>  

                    <div class="col">
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Black Zipper Hoodie</div>
                        <div style="height: 27px"/>
                        <div class="text-left text-body2">Fleece Fabric</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Tinggi model pada foto ini adalah 165 cm</div>
                    </div>  
                </div>

                <div style="height: 40px"/>
                <q-select outlined v-model="model" :options="baju" label="Ukuran" />
                <div style="height: 20px"/>
                <div class="row">
                    <div class="col-3">
                        <q-input filled type="number" v-model="jumlah" label="0" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Masukan jumlah',
                                val => val > 0 && val < 100 || 'Masukan Jumlah Order'
                        ]"/>
                    </div>
                </div>
                <div style="height: 20px"/>
                <q-btn outline color="primary" label="Massukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="$router.replace('/payjutsuitsweatshirt')"/>

            </div> 
        </div>
        <div class="column" style="height: 50px"/>
    </div>
</template>

<script>
export default {
    data () {
    return {
      slide: 1,
       model: null,
     baju: ['S','M','L','XL']
    }
  }
}
</script>

<style lang="sass" scoped>

</style>