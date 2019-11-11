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
                    <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/admin/addsepatu')"/>
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
              <q-item-label class="q-mt-sm">Ukuran</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Stock</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
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

          <q-item-section top class="col-2 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{formbaju.KodeShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.NamaShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.UkuranShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.StockShoes}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.ImgShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{formbaju.HargaShoes }}</q-item-label>
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
                    <q-input filled v-model="formshoes.KodeShoes" label="Kode Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.NamaShoes" label="Nama Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.UkuranShoes" label="Ukuran"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.StockShoes" label="Stock"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.ImgShoes" label="Img"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formshoes.HargaShoes" label="Harga"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
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
import shoes from '../../api/barang/shoes';

export default {
  data () {
    return {
     
      fromsepatus:[{}],

      
      formshoes:{
        KodeShoes : '',
        NamaShoes : '',
        UkuranShoes : '',
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
      this.frombajus = response
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
        this.formshoes.id = frombajuw.id
        this.formshoes.KodeShoes = frombaju.KodeShoes
        this.formshoes.NamaShoes = frombaju.NamaShoes
        this.formshoes.UkuranShoes = frombaju.UkuranShoes
        this.formshoes.StockShoes = frombaju.StockShoes
        this.formshoes.ImgShoes = frombaju.ImgShoes
        this.formshoes.HargaShoes = frombaju.HargaShoes
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
    Shoes.updateBarangShoes(window,self.frombajus.id, self.frombajus.KodeShoes, 
    self.frombajus.NamaShoes, self.frombajus.UkuranShoes, self.frombajus.StockShoes, 
    self.frombajus.ImgShoes, self.frombajus.HargaShoes)

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