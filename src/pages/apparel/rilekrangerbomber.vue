<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide :name="1" img-src="/statics/apparel/j4.jpg"/>
                        <q-carousel-slide :name="2" img-src="/statics/apparel/j4-1.jpg"/>
                        <q-carousel-slide :name="3" img-src="/statics/apparel/j4-2.jpg"/>
                        <q-carousel-slide :name="4" img-src="/statics/apparel/j4-3.jpg"/>
                    </q-carousel>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">Rilek Ranger Bomber</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. 465.000</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">Rilek Ranger Bomber adalah pilihan tepat tentunya tidak salah alamat apabila kamu 
                    ingin memakai jaket di keseharianmu. Buat naik motor? Cakep! Buat ke party? Cakep! Buat pamer pas pulang kampong 
                    lebaran? Cakep! Ke acara-acara indie artsy? Cakep! Buat pacaran? PASTINYA CAKEP LAAAH~~</div>
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
                        <div class="text-left text-body2">Red Light Bomber</div>
                        <div style="height: 27px"/>
                        <div class="text-left text-body2">Premium Puma Fabric</div>
                        <div style="height: 30px"/>
                        <div class="text-left text-body2">Tinggi model pada foto ini adalah 165 cm</div>
                    </div>  
                </div>

                <div style="height: 40px"/>
                <q-select outlined v-model="model" :options="options" label="Ukuran" />
                <div style="height: 20px"/>
                <div class="row">
                    <div class="col-3">
                        <q-btn-group>
                            <q-btn outline color="grey-6" class="text-bold text-weight-bolder" label="-"/>
                            <q-input style="width: 50px" input-class="text-center" outlined v-model="text" label=""  />
                            <q-btn outline color="grey-6" class="text-bold text-weight-bolder" label="+"/>
                        </q-btn-group>
                    </div>
                </div>
                <div style="height: 20px"/>
                <q-btn outline color="primary" label="Massukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" class="full-width" @click="$router.replace('/payment')"/>

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