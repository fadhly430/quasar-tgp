<template>
    <div class="q-pa-md">
        <div class="column" style="height: 42px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row justify-between">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE Apparel</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/owner/addapparel')"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" style="height: 10px"/>
        <q-separator color="grey-10" inset />
        <div class="column" style="height: 30px"/>
        
<!-- apparel -->
      <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xl text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Apparel</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Nama Apparel</q-item-label>
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

        <q-item v-for="(formbaju, index) in frombajus" :key="formbaju.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{formbaju.KodeApparel}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.NamaApparel}}</q-item-label>
          </q-item-section>

         

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.StockApparel}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-3 gt-sm flex flex-center ">
            <q-img style="width:50%" :src="formbaju.ImgApparel"/>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.HargaApparel }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(formbaju.id)" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit"  @click="edit(formbaju)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="formapparel.KodeApparel" label="Kode Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formapparel.NamaApparel" label="Nama Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formapparel.KeteranganApparel" label="Keterangan"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formapparel.StockApparel" label="Stock"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formapparel.ImgApparel" label="Img"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formapparel.HargaApparel" label="Harga"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
                    <!-- Button awal -->
                    <div>
                        <q-btn label="Update" type="button" color="blue" v-close-popup @click="update(form)" />
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
import apparel from '../../api/barang/apparel';

export default {
  data () {
    return {
      frombajus: [{}],
     

      
      formapparel:{
        KodeApparel : '',
        NamaApparel : '',
        KeteranganApparel : '',
        StockApparel : '',
        HargaApparel : '',
        ImgApparel :''
      },
      dialog: false,
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    apparel.getBarangApparel(window)
    {
      this.frombajus = response
    }
  },

  methods : {
    onDelete(id){
      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
       apparel.deleteBarangApparel(window.id)
              
       .then((res) => {
          apparel.getBarangApparel(window)
         
          .then((res)=>{
            this.frombajus=res.data
            this.$router.go('owner/tabel')
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
    edit(frombaju) {
      try{
        this.dialog = true
        this.updateSubmit = true
        this.formapparel.id = frombajuw.id
        this.formapparel.KodeApparel = frombaju.KodeApparel
        this.formapparel.NamaApparel = frombaju.NamaApparel
        this.formapparel.KeteranganApparel = frombaju.KeteranganApparel
        this.formapparel.StockApparel = frombaju.StockApparel
        this.formapparel.ImgApparel = frombaju.ImgApparel
        this.formapparel.HargaApparel = frombaju.HargaApparel
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
    apparel.updateBarangApparel(window,self.frombajus.id, self.frombajus.KodeApparel, 
    self.frombajus.NamaApparel, self.frombajus.KeteranganApparel, self.frombajus.StockApparel, 
    self.frombajus.ImgApparel, self.frombajus.HargaApparel)

    .then(function(result)
    {
      self.$router.go('owner/tabel')
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