<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide :name="1" img-src="/statics/wallet/w10.jpg"/>
                        <q-carousel-slide :name="2" img-src="/statics/wallet/w10-1.jpg"/>
                        <q-carousel-slide :name="3" img-src="/statics/wallet/w10-2.jpg"/>
                        <q-carousel-slide :name="4" img-src="./statics/wallet/w10-3.jpg"/>
                    </q-carousel>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">Dwight Cision</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. 169.900</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">Suka pakai dompet vertikal? 
                    Type Dwight ini bisa jadi pilihannya. Di Design panjang, dengan ukuran yang pas di saku belakang celana. Suka taruh banyak uang? Dompet ini bisa menampung uangmu yang banyak loh!</div>
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
                        <div class="text-left text-body2">Polyester materials</div>
                        <div style="height: 27px"/>
                        <div class="text-left text-body2">Waterproof</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">2 money compartment</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">1 secret pocket</div>
                    </div>
                </div>

                <div style="height: 40px"/>
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
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="$router.replace('/paydwightcision')"/>

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
      options: []
    }
  }
}
</script>

<style lang="sass" scoped>

</style>