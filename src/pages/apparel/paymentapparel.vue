<template>
    <div class="q-pa-md">
        <div class="column" style="height: 100px"/>
        <div class="row justify-center">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-6">
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
                            <div class="col-1 q-gutter-sm"/>
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
                                <q-select outlined v-model="Negara" :options="nega" label="Negara" placeholder="Negara"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-select outlined v-model="Provinsi" :options="prov" label="Provinsi" placeholder="Provinsi"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-4 q-gutter-xl">
                                <q-input outlined v-model="Kodepos"  placeholder="Kode pos"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Tlp" placeholder="Phone"/>
                            </div>
                        </div>

                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-select outlined v-model="form.Shipping" :options="ship" placeholder="Shipping"/>
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
            <div class="col-1 q-gutter-xl" style="width:70px">
                 <q-separator  color="blue-grey-3" vertical inset />
            </div>
            <div class="col">
            <div class="row">
                   <div class="col-2 q-gutter-lg">
                       <q-card>
                         <q-img :src="images.ImgApparel"/>
                       </q-card>
                    </div>
                <div class="col-1 q-gutter-lg"/>    
                <div class="col-3">
                    <div class="text-overline text-bold"> {{images.NamaApparel}} </div>
                </div>
                <div class="col-1 q-gutter-xl"/>    
                <div class="col-2">
                    <q-select borderless v-model="form.Ukuruan" :options="size" label="Size"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-2">
                    <q-input borderless type="number" v-model="form.Jumlah" label="Jumlah" lazy-rules 
                    :rules="[ val => val !== null && val !== '' || 'Please Insert Jumlah']"/>
                </div>
                <div class="col-1 q-gutter-lg"/>

                <div class="col-2">
                    <div class="text-overline text-body2 text-bold">Rp. {{images.HargaApparel}}</div>
                </div>
            </div>

            <div class="column" style="height: 50px"/>
            
            <div class="column" style="height:20px"/>
            <div class="row">
                <div class="col">
                    <q-separator color="grey-5" />
                </div>
            </div>
            <div class="column" style="height: 30px"/>

            <div class="row">
                <div class="col-8">
                    <q-input outlined v-model="form.Diskon"  placeholder="Kode Diskon"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-1">
                
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
                    <div class="text-right text-bold">Rp. {{subtotal}}</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Discont</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp.{{dis}}</div>
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Shipping</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp.{{kurir}}</div>
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
                    <div class="text-right text-bold">Rp. {{total}}</div> 
                </div>
             </div>
        </div>

        </div>
        <div class="column" style="height: 100px"/>
        </div>
</template>

<script>
import payment from '../../api/payment/index';
import containeer from '../../api/container/container';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/barang/apparel';
import kupon from '../../api/discont/discont';

export default {
    data(){
        return{
            data:[],
            nega: null,
            prov: null,
            ship: null,
            size: null,
            images:[{}],

            form: [
            {
                id_barang:'',
                id_customer : '',
                Jumlah : 0,
                Diskon :0,
                Shipping : 0,
                
            }
        ],

            FNama:"",
            LNama:"",
            Alamat:"",
            Kecamatan:"",
            Kota:"",
            Negara:"",
            Provinsi:"",
            Kodepos:"",
            Tlp:"",
            Ukuran: "",

            size:['S','M','L','XL'],
            nega: ['Indonesia'],
            prov: ['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu','Gorontalo','Jakarta','Jambi','Jawa Barat'
        ,'Jawa Tengah','Jawa Timur','Kalimantan Timur',' Kalimantan Utara','Kepulauan Riau','Lampung','Maluku','Maluku Utara','Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulewasi Selatan','Sulawesi Selatan'
        ,'Sulawesi Tengah','Sulawesi Tenggara','Sulawesi Utara','Sumatra Barat','Sumatra Selatan','Sumatra Selatan','Sumatra Utara','Yogyakarta'],
            ship:['JNE','TIKI','SICEPAT']
        }
    },

    computed: {
        
        subtotal:function(){
        return  parseInt(this.images.HargaApparel) * parseInt(this.form.Jumlah)
        },

        kurir:function(){
            if(this.form.Shipping == 'JNE'){
                return parseInt(13000)
            }
            else if (this.form.Shipping == 'TIKI'){
                return parseInt(11000)
            }
            else if (this.form.Shipping == 'SICEPAT'){
                return parseInt(9000)
            }
        },

        dis:function(){
            if(this.form.Diskon== 'baru'){
                return parseInt(13000)
            }
            
        },

        total:function() { 
            if (this.form.Diskon=='baru'){
                return (this.subtotal + this.kurir) - parseInt(10000)
            }
            
        },

    },

    beforeCreate(){
      let getId= localStorage.getItem('idbarang');
      console.log(getId)

      let self=this;
      product.getbyidApparel(window,getId)
      .then(function (result){
          self.images=result
          console.log('test', self.images);
      })
      .catch(function (err)
      {
          console.log(err);
      });
    },

    methods : {
        onSubmit(){
            let self = this;

            let getidproduct = localStoragege.getItem('id_barang');
            let getidcustomer = localStorage.getItem('id_customer');
            
            payment.postmessagedata(window, getidproduct,getidcustomer, self.FNama, self.LNama, 
            self.Alamat, self.Kecamatan, self.Kota, self.Negara,  self.Provinsi, self.Kodepos, 
            self.Tlp, self.form.Shipping , self.form.Jumlah, self.total).then(function(result){
                console.log(response)
                return self.$router.push("");
                
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
            this.Shipping=null,
            this.dis=null,
            this.subtotal=null,
            this.kurir=null,
            this.Diskon=null,
            this.total=null
        }
    },

   
}
</script>

<style lang="less" scoped>

</style>
