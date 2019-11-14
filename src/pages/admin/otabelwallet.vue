<template>
    <div class="q-pa-md">
        <div class="column" style="height: 42px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row justify-between">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE Wallet</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/admin/addwallet')"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" style="height: 10px"/>
        <q-separator color="grey-10" inset />
        <div class="column" style="height: 30px"/>
        
<!-- wallet -->
      <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xl text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Wallet</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Nama Wallet</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Stock</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Img</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Harga</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
              <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(formdompet, index) in fromdompets" :key="formdompet.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{formdompet.KodeWallet}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formdompet.NamaWallet}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formdompet.StockWallet}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-3 gt-sm flex flex-center ">
            <q-img style="width:50%" :src="formdompet.ImgWallet"/>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formdompet.HargaWallet }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(formdompet.id)" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit"  @click="edit(formdompet)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="formwallet.KodeWallet" label="Kode Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formwallet.NamaWallet" label="Nama Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formwallet.KeteranganWallet" label="Keterangan"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formwallet.StockWallet" label="Stock"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formwallet.HargaWallet" label="Harga"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
                    <!-- Button awal -->
                    <div>
                        <q-btn label="Update" type="button" color="blue" v-close-popup @click="update(formwallet)" />
                        <q-btn flat label="Cancel" color="black" v-close-popup="cancelEnabled" @click="batal()" />

                    </div>
                    <!-- Button akhir -->
                </q-form>
                  
              </div>
          </q-card-section>
        </q-card>
      </q-dialog>
<!--  -->
    </div> 
</template>

<script>
import wallet from '../../api/barang/wallet';

export default {
  data () {
    return {
      
      fromdompets:[{}],

      
      formwallet:{
        KodeWallet : '',
        NamaWallet : '',
        KeteranganWallet : '',
        StockWallet : '',
        HargaWallet : '',
        ImgWallet :''
      },
      dialog: false,
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    wallet.getBarangWallet(window)
    {
      this.fromdompets = response
    }
  },

  methods : {
    onDelete(id){
      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
       wallet.deleteBarangWallet(window.id)
              
       .then((res) => {
          wallet.getBarangWallet(window)
         
          .then((res)=>{
            this.fromdompets=res.data
            this.$router.go('owner/tabelwallet')
          })
          .catch(()=>
          {
            alert('Error load data');
          })
        })
        .catch(()=>
        {
          alert('Error load data');
        })
        console.log("delete called");
      }
    },
    edit(formwallet) {
      try{
        this.dialog = true
        this.updateSubmit = true
        this.formwallet.id = formwallet.id
        this.formwallet.KodeWallet = formwallet.KodeWallet
        this.formwallet.NamaWallet = formwallet.NamaWallet
        this.formwallet.KeteranganWallet = formwallet.KeteranganWallet
        this.formwallet.StockWallet = formwallet.StockWallet
        this.formwallet.ImgWallet = formwallet.ImgWallet
        this.formwallet.HargaWallet = formwallet.HargaWallet
      }
      catch (error)
      {
        console.log(error.message)
      }
    },    

    batal(){
      this.dialog = false
    },
  
  updated(id){
    const self = this
    wallet.updateBarangWallet(window,self.formwallet.id, self.formwallet.KodeWallet, 
    self.formwallet.NamaWallet, self.formwallet.KeteranganWallet, self.formwallet.StockWallet, 
    self.formwallet.ImgWallet, self.formwallet.HargaWallet)

    .then(function(result)
    {
      self.$router.go('owner/tabelwallet')
    })
    .catch(function(err)
    {
      console.log(err);
      });
    }
  }
 }
</script>


<style lang="less" scoped>

</style>