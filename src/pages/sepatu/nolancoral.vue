<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide :name="1" img-src="/statics/sepatu/s5.jpg"/>
                        <q-carousel-slide :name="2" img-src="/statics/sepatu/s5-1.jpg"/>
                        <q-carousel-slide :name="3" img-src="/statics/sepatu/s5-2.jpg"/>
                        <q-carousel-slide :name="4" img-src="./statics/sepatu/s5-3.jpg"/>
                        <q-carousel-slide :name="5" img-src="./statics/sepatu/s5-4.jpg"/>
                    </q-carousel>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">Nolan Coral</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. 379.000</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">Nolan 2.0 adalah sneakers bertali dengan uppers yang 
                    memiliki berbagai pilihan warna multitone yang soft. Sneakers ini ringan dan empuk, 
                    cocok untuk urban travelling, jalan-jalan, dan aktivitas santai lainnya.</div>
                <div style="height: 20px"/>

                <div class="text-left text-body2">Detail:</div>
                
                <div class="row">
                    <div class="col-1"/>
                    <div class="col-1">
                        <div class="text-left text-h3">.</div>
                        <div class="text-left text-h3">.</div>
                        <div class="text-left text-h3">.</div>
                        <div class="text-left text-h3">.</div>
                    </div>  

                    <div class="col">
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Upper: Faux Leather</div>
                        <div style="height: 27px"/>
                        <div class="text-left text-body2">Lining: Air Mesh Lining</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Inshock: Air Mesh + Latex Foam</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Outsole: Thermoplastic Rubber (TPR)</div>
                    </div>
                </div>

                <div style="height: 40px"/>
                <q-select outlined v-model="model" :options="sepatu" label="Ukuran sepatu" />
                <div style="height: 20px"/>
                <div class="row">
                    <div class="col-3">
                        <q-input filled type="number" v-model="age" label="Jumlah" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Please type your age',
                                val => val > 0 && val < 100 || 'Please type a real age'
                        ]"/>
                    </div>
                </div>
                <div style="height: 20px"/>
                <q-btn outline color="primary" label="Massukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="$router.replace('/paynolan-coral')"/>

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
      sepatu: ['36','37','38','39','40','41','42','43','44']
    }
  }
}
</script>

<style lang="sass" scoped>

</style>