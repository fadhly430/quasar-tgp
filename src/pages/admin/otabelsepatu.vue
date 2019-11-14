<template>
    <div class="q-pa-md">
        <div class="column" style="height: 42px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row justify-between">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE Shoes</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/owner/addsepatu')"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" style="height: 10px"/>
        <q-separator color="grey-10" inset />
        <div class="column" style="height: 30px"/>
        
<!-- sepatu -->
      <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xl text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Shoes</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Nama Shoes</q-item-label>
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

        <q-item v-for="(formsepatu, index) in fromsepatus" :key="formsepatu.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{formsepatu.KodeShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formsepatu.NamaShoes}}</q-item-label>
          </q-item-section>

          

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formsepatu.StockShoes}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-3 gt-sm flex flex-center">
            <q-img style="width:50%" :src="formsepatu.ImgShoes"/>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formsepatu.HargaShoes }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(formsepatu.id)" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit"  @click="edit(formsepatu)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="formshoes.KodeShoes" label="Kode Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.NamaShoes" label="Nama Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.KeteranganShoes" label="Keterangan"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.StockShoes" label="Stock"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <!-- <q-input filled v-model="formshoes.ImgShoes" label="Img"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" /> -->
                    <q-input filled v-model="formshoes.HargaShoes" label="Harga"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
                    <!-- Button awal -->
                    <div>
                        <q-btn label="Update" type="button" color="blue" v-close-popup @click="update(formshoes)" />
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
import shoes from '../../api/barang/shoes';

export default {
  data () {
    return {
     
      fromsepatus:[{}],

      
      formshoes:{
        KodeShoes : '',
        NamaShoes : '',
        KeteranganShoes : '',
        StockShoes : '',
        HargaShoes : '',
        ImgShoes :''
      },
      dialog: false,
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    shoes.getBarangShoes(window)
    {
      this.fromsepatus = response
    }
  },

  methods : {
    onDelete(id){
      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
       shoes.deleteBarangShoes(window.id)
              
       .then((res) => {
          shoes.getBarangShoes(window)
         
          .then((res)=>{
            this.fromsepatus=res.data
            this.$router.go('owner/tabelsepatu')
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
    edit(formsepatu) {
      try{
        this.dialog = true
        this.updateSubmit = true
        this.formshoes.id = formsepatu.id
        this.formshoes.KodeShoes = formsepatu.KodeShoes
        this.formshoes.NamaShoes = formsepatu.NamaShoes
        this.formshoes.KeteranganShoes = formsepatu.KeteranganShoes
        this.formshoes.StockShoes = formsepatu.StockShoes
        this.formshoes.ImgShoes = formsepatu.ImgShoes
        this.formshoes.HargaShoes = formsepatu.HargaShoes
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
    Shoes.updateBarangShoes(window,self.formshoes.id, self.formshoes.KodeShoes, 
    self.formshoes.NamaShoes, self.formshoes.KeteranganShoes, self.formshoes.StockShoes, 
    self.formshoes.ImgShoes, self.formshoes.HargaShoes)

    .then(function(result)
    {
      self.$router.go('owner/tabelsepatu')
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