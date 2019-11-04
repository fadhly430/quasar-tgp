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
           <div class="row justify-center responsive">
                
                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/keiocivision')">
                    <img src="statics/wallet/w1.jpg" class="responsive" >
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Keio Cision</div>
                                <div class="text-center" >Rp. 169.900</div>
                        </div>
                        </div>
                        </q-card-actions>
                    </q-card>
                </div>

                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/keionami')">
                    <img src="statics/wallet/w2.jpg" class="responsive">
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Keio Nami</div>
                                <div class="text-center" >Rp. 169.900</div>
                             </div>
                        </div>
                    </q-card-actions>
                    </q-card>
                </div>

                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/keiohexablack')">
                    <img src="statics/wallet/w3.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                        <div class="text-center text--subtitle1">Keio Hexa Black</div>
                        <div class="text-center" >Rp. 169.900</div>
                    </div>
                        </div>
                    </q-card-actions>
                    </q-card>
                </div>

                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/clauszara')">
                    <img src="statics/wallet/w4.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Claus Zara</div>
                                <div class="text-center" >Rp. 169.900</div>
                            </div>
                         </div>
                    </q-card-actions>
                    </q-card>
                </div>

                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/adlermojave')">
                    <img src="statics/wallet/w5.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Adler Mojave</div>
                                <div class="text-center" >Rp. 169.900</div>
                            </div>
                        </div>
                    </q-card-actions>
                    </q-card>
                </div>

            </div>

             <div class="column" style="height: 70px"/><!-- jarak --->

            <div class="row justify-center responsive">
                
                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/liviamac')">
                    <img src="statics/wallet/w6.jpg" class="responsive" >
                    <q-card-actions align="around">
                        <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Livia Mac</div>
                                <div class="text-center" >Rp. 169.900</div>
                        </div>
                        </div>
                        </q-card-actions>
                    </q-card>
                </div>

                <div class="col-2 padding">
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

                <div class="col-2 padding">
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

                <div class="col-2 padding">
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

                <div class="col-2 padding">
                    <q-card  @click="$router.replace('/dwightcision')">
                    <img src="statics/wallet/w10.jpg" class="responsive">
                    <q-card-actions align="around">
                         <div class="row justify-center">
                            <div class="col">
                                <div class="text-center text--subtitle1">Dwight Cision</div>
                                <div class="text-center" >Rp. 169.900</div>
                            </div>
                        </div>
                    </q-card-actions>
                    </q-card>
                </div>

            </div>

        <!--  -->
            <div class="column" style="height: 70px"/><!-- jarak --->

            <div class="q-pa-lg flex flex-center">
                <q-pagination v-model="current" color="purple" :max="10" :max-pages="6" :boundary-numbers="true"                >
                </q-pagination>
            </div>
            <div class="column" style="height: 80px"/><!-- jarak --->

        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      current: 6
    }
  }
}
</script>

<style lang="sass" scoped>
.padding
    padding: 5px

.newitem
  width: 200px
  height: 200px
</style>