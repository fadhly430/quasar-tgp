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
                             <q-input outlined v-model="FNama" placeholder="Nama Depan" style="200px" />
                            </div>
                            <div class="col-1 q-gutter-md"/>
                            <div class="col-6 q-col-gutter-xl">
                             <q-input outlined v-model="LNama" placeholder="Nama Belakang" style="200px" />
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Alamat" placeholder="Alamat"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Kecamatan" placeholder="Kecamatan"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Kota" placeholder="Kota"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-4 q-gutter-xl">
                                <q-select outlined v-model="Negara" :options="nega" placeholder="Negara"/>
                            </div>
                            <div class="col-1 q-col-gutter-md"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-select outlined v-model="Provinsi" :options="prov" placeholder="Provinsi"/>
                            </div>
                            <div class="col-1 q-col-gutter-md"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-input outlined v-model="Kodepos"  placeholder="Kode pos"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Tlp" placeholder="Phone" />
                            </div>
                        </div>

                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-select outlined v-model="Shipping" :options="ship" placeholder="Shipping"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                       
                        

                        <div class="row">
                            <div class="col-8 q-gutter-md"/>
                            <div class="col-1 q-gutter-xs"/>
                            <div class="col-3">
                                <q-btn style="background: #283b39; color: white" label="Confirm Shipping" size="15px" type="submit" @click="onSubmit()"  />
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
                   <div class="col-2">
                        <q-card class="iconbarang">
                            <q-img src="statics/wallet/w2.jpg"/>
                        </q-card>
                    </div>
                    <div class="col-4">
                        <div class="text-body1 text-center text-bold"> Keio Nami </div>
                    </div>
                    <div class="col-2"/>
                    <div class="col-4">
                        <div class="text-body2 text-bold">Rp. 169.900</div>
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
                    <q-input outlined v-model="Diskon"  placeholder="Kode Diskon"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-1">
                <q-btn style="background: #283b39; color: white" class="text-body2" label="Apply" size="21px"  type="submit" @click="onSubmit()"/>
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
                    <div class="text-right text-bold">Rp.169.900</div>
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
        <div class="column" style="height: 100px"/>
        </div>
</template>

<script>
import payment from '../../../api/payment/index';
export default {
    data(){
        return{
            nega: null,
            prov: null,
            ship: null,

            FNama:"",
            LNama:"",
            Alamat:"",
            Kecamatan:"",
            Kota:"",
            Negara:"",
            Provinsi:"",
            Kodepos:"",
            Tlp:"",
            Shipping:"",
            

            nega: ['Indonesia'],
            prov: ['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu','Gorontalo','Jakarta','Jambi','Jawa Barat'
        ,'Jawa Tengah','Jawa Timur','Kalimantan Timur',' Kalimantan Utara','Kepulauan Riau','Lampung','Maluku','Maluku Utara','Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulewasi Selatan','Sulawesi Selatan'
        ,'Sulawesi Tengah','Sulawesi Tenggara','Sulawesi Utara','Sumatra Barat','Sumatra Selatan','Sumatra Selatan','Sumatra Utara','Yogyakarta'],
            ship:['JNE (Regular) - Rp. 13.000']
        }
    },
    methods : {
        onSubmit(){
            let self = this;
            
            payment.postmessagedata(window, self.FNama, self.LNama, self.Alamat, self.Kecamatan, self.Kota, self.Negara, self.Provinsi, self.Kodepos, self.Tlp, self.Shipping ).then(function(result){
                console.log(response)
                return self.$router.push("/");
                
            })
            .catch(function (error) {
                console.log(error);
            });
            this.FNama=null,
            this.LNama=null,
            this.Alamat=null,
            this.Kecamatan=null,
            this.Kota=null,
            this.Negara=null,
            this.Provinsi=null,
            this.Kodepos=null,
            this.Tlp=null,
            this.Shipping=null
        
            
        }}}
</script>

<style lang="less" scoped>

</style>