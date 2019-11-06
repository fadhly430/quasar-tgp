<template>
    <div class="q-pa-md">
        <div class="column" style="height: 100px"/>
        <div class="row justify-center">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-7">
                <div class="column">
                    <div class="col-1">
                         <img src="/statics/IconLogo_Transparent_300x.png">
                    </div>
                    <div class="col-1" style="height:20px"/>
                    <div class="col-1" style="height:40px">
                        <div class="text-left text-h6">Shipping address</div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-6 q-col-gutter-xl">
                             <q-input outlined v-model="fnama" placeholder="Nama Depan" :dense="dense" style="200px" />
                            </div>
                            <div class="col-1 q-gutter-md"/>
                            <div class="col-6 q-col-gutter-xl">
                             <q-input outlined v-model="lnama" placeholder="Nama Belakang" :dense="dense" style="200px" />
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="alamat" placeholder="Alamat" :dense="dense"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="kecamatan" placeholder="Kecamatan" :dense="dense"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="kota" placeholder="Kota" :dense="dense"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-4 q-gutter-xl">
                                <q-select outlined v-model="negara" :options="nega" placeholder="Negara" :dense="dense" label="Negara"/>
                            </div>
                            <div class="col-1 q-col-gutter-md"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-select outlined v-model="provinsi" :options="prov" placeholder="Provinsi" :dense="dense" label="Probinsi"/>
                            </div>
                            <div class="col-1 q-col-gutter-md"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-input outlined v-model="kodepose"  placeholder="Kode pos" :dense="dense"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-select outlined v-model="shipping" :options="ship" placeholder="shipping" :dense="dense" label="Shipping"/>
                            </div>
                        </div>
                        
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-8 q-gutter-md"/>
                            <div class="col-1 q-gutter-xs"/>
                            <div class="col-3">
                                <q-btn style="background: #283b39; color: white" label="Confrim Shiping" size="15px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 q-gutter-xl">
                 <q-separator  color="blue-grey-3" vertical inset />
            </div>
            <div class="col">
                <div class="row items-center">
                   <div class="col-3">
                      <q-card class="iconbarang">
                        <q-img src="statics/wallet/w7.jpg"/>
                    </q-card>
                </div>
                <div class="col-4 ">
                    <div class="text-body1 text-bold"> Clausa Nami </div>
                </div>
                <div class="col-2"/>
                <div class="col-3">
                    <div class="text-body2 text-bold">Rp. 169.900</div>
                </div>
                </div>
            </div>
            <div class="column" style="height: 50px"/>
            <div class="row">
                <div class="col">
                    <q-separator color="grey-5" />
                </div>
            </div>
            <div class="column" style="height: 30px"/>

            <div class="row">
                <div class="col-8">
                    <q-input outlined v-model="diskon"  placeholder="Kode Diskon" :dense="dense"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-1">
                <q-btn style="background: #283b39; color: white" class="text-body2" label="Apply" size="21px"/>
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Subtotal</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">0/div>
                </div>

            </div>
            <div class="column" style="height: 30px"/>
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Shipping</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">0</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>

             <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Total</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">0</div>
                </div>
             </div>
            </div>
            </div>
             <div class="column" style="height: 100px"/><!-- jarak --->
        </div>

       
</template>

<script>
export default {
    data(){
        return{
            nega: null,
            prov: null,
            ship: null,

            fnama:"",
            lnama:"",
            alamat:"",
            kecamatan:"",
            kota:"",
            negara:"",
            provinsi:"",
            kodepose:"",
            kota:"",
            diskon:"",

            nega: ['Indonesia'],
            prov: ['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu','Gorontalo','Jakarta','Jambi','Jawa Barat'
        ,'Jawa Tengah','Jawa Timur','Kalimantan Timur',' Kalimantan Utara','Kepulauan Riau','Lampung','Maluku','Maluku Utara','Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulewasi Selatan','Sulawesi Selatan'
        ,'Sulawesi Tengah','Sulawesi Tenggara','Sulawesi Utara','Sumatra Barat','Sumatra Selatan','Sumatra Selatan','Sumatra Utara','Yogyakarta'],
            ship:['JNE (Regular) - Rp. 13.000']
        }
    }
}
</script>

<style lang="sass" scoped>

.iconbarang
  height: 80px
  width:  80px  
</style>