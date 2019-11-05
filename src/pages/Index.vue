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
      
        <div class="col-xs-1 q-col-gutter-x-xl" @click="$router.replace('/wallet')"/>
        <div class="col-3 ">
          <q-card>
          <q-img src="./statics/SAKA2.jpg" style="width: 100%"/>
          </q-card>
        </div>
    </div>

    <div class="column" style="height: 30px"/> <!-- jarak --->

    <div class="row items-center">
      <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
      <div class="col-2">
        <div class="text-h5 text-center text-weight-regular"> New Items</div>
      </div>
       <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
    </div>

    <div class="column" style="height: 20px"/> <!-- jarak --->
    
    <div class="q-gutter-md row justify-center">
      

      <div class="col-2">
        <q-card  @click="$router.replace('/taigacoach')">
          <img src="statics/apparel/j2.jpg" class="responsive">
          <q-card-actions align="around">
            <div class="row justify-center">
              <div class="col">
                <div class="text-center text--subtitle1">Taiga Coach</div>
                <div class="text-center" >Rp. 475.000</div>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-2">
        <q-card  @click="$router.replace('/carrieruler')">
                    <img src="statics/wallet/w8.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                        <div class="text-center text--subtitle1">Carrie Ruler</div>
                        <div class="text-center" >Rp. 169.900</div>
                    </div>
                        </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
       <q-card  @click="$router.replace('/nolan-chery')">
                    <img src="statics/sepatu/s9.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Nolan Chery White</div>
                                <div class="text-center" >Rp. 379.000</div>
                            </div>
                         </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
         <q-card  @click="$router.replace('/nolan-full')">
                    <img src="statics/sepatu/s10.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Nolan Full White</div>
                                <div class="text-center" >Rp. 399.000</div>
                            </div>
                        </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
        <q-card  @click="$router.replace('/gomenasaibomber')">
                    <img src="statics/apparel/j3.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                        <div class="text-center text--subtitle1">Gomenasai Bomber</div>
                        <div class="text-center" >Rp. 465.000</div>
                    </div>
                        </div>
                    </q-card-actions>
                    </q-card>
      </div>

    </div>

     <div class="column" style="height: 70px"/><!-- jarak --->


    <div class="row items-center">
      <div class="col-5">
        <q-separator color="blue-grey-3" inset />
      </div>
      <div class="col-2">
        <div class="text-h5 text-center text-weight-regular"> Hot Items</div>
      </div>
       <div class="col-5">
        <q-separator color="blue-grey-3" inset />
       </div>
    </div>

    <div class="column" style="height: 20px"/> <!-- jarak --->
    
    <div class="q-gutter-md row justify-center">
      

      <div class="col-2">
         <q-card  @click="$router.replace('/rua-tosca')">
                    <img src="statics/sepatu/s6.jpg" class="responsive" >
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Rua White Tosca</div>
                                <div class="text-center" >Rp. 389.000</div>
                        </div>
                        </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
        <q-card  @click="$router.replace('/adlercaren')">
                    <img src="statics/wallet/w9.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Adler Caren</div>
                                <div class="text-center" >Rp. 169.900</div>
                            </div>
                         </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
        <q-card  @click="$router.replace('/crazyasiancoach')">
                    <img src="statics/apparel/j1.jpg" class="responsive" >
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Crazy Asian Coach</div>
                                <div class="text-center" >Rp. 475.000</div>
                        </div>
                        </div>
                        </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
        <q-card  @click="$router.replace('/clausnami')">
                    <img src="statics/wallet/w7.jpg" class="responsive">
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Clausa Nami</div>
                                <div class="text-center" >Rp. 169.900</div>
                             </div>
                        </div>
                    </q-card-actions>
                    </q-card>
      </div>

      <div class="col-2">
         <q-card  @click="$router.replace('/naisubomber')">
                    <img src="statics/apparel/j7.jpg" class="responsive">
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Naisu Bomber</div>
                                <div class="text-center" >Rp. 465.000</div>
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
export default {
   data () {
    return {
      slide: '1'
    }
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
