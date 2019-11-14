<template>
    <div class="q-pa-md">
        <div class="column" style="height: 42px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row justify-between">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE Coupons</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="add = true"/>
                    </div>

                    <q-dialog v-model="add" >
                        <q-card style="width: 700px; max-width: 80vw;">
                        <q-card-section>
                            <div class="text-h6 text-center">Add Coupons</div>
                        </q-card-section>
                        <q-card-section>
                            <q-form @submit="adddata" @reset="onReset" class="q-gutter-md" >
                                <q-input outlined v-model="Coupons" label="Coupons" lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please Input Coupon']"/>

                                <q-input outlined v-model="Discount" label="Discount" lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please Input Discount']"/>

                                <div>
                                    <q-btn label="Add Coupon" type="submit" color="primary" />
                                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                                </div>
                                
                            </q-form>
                        </q-card-section>
                    </q-card>
                    </q-dialog>

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

          <q-item-section top class="col-4 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Coupons</q-item-label>
          </q-item-section>

          <q-item-section top class="col-4 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Discount</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm">
              <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(fromcoupons, index) in formcupons" :key="fromcoupons.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-4 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{fromcoupons.Coupons}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-4 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{fromcoupons.Discount}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-3 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(fromcoupons.id)" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit"  @click="edit(fromcoupons)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="formkupon.Coupons" label="Coupons"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formkupon.Discount" label="Discount"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
                    <!-- Button awal -->
                    <div>
                        <q-btn label="Update" type="button" color="blue" v-close-popup @click="update(formkupon)" />
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
import cupon from '../../api/discont/discont';

export default {
  data () {
    return {
      Discount: null,
      Coupons : null,

      formcupons: [{}],
      add : false,

      
      formkupon:{
        Coupons : '',
        Discount : ''

      },
      dialog: false,
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    cupon.getdiscont(window)
    {
      this.formcupons = response
    }
  },

  methods : {
    adddata(){
        let self = this;

        cupon.postdiscont(window, self.Discount, self.Coupons).then(function(result){
        console.log(response)
        return self.$router.push("admin/coupons");
        })
        .catch(function(error){
            console.log(error);
        });

        this.Discount=null,
        this.Coupons=null
    },


    onDelete(id){

      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
       cupon.deletediscont(window, id)
              
       .then((res) => {
          cupon.getdiscont(window)
         
          .then((res)=>{
            this.formcupons=res.data
            // this.$router.go('admin/coupons')
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
    edit(fromcoupons) {
      try{
        this.dialog = true
        this.updateSubmit = true
        this.formkupon.id = fromcoupons.id
        this.formkupon.Coupons = fromcoupons.Coupons
        this.formkupon.Discount = fromcoupons.Discount
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
    apparel.updateBarangApparel(window,self.formcupons.id, self.formcupons.Coupons, 
    self.formcupons.Discount)

    .then(function(result)
    {
      self.$router.go('admin/coupons')
    })
    .catch(function(err)
    {
      console.log(err);
      });
    }
  },
  
  onReset () {
      this.Coupons = null
      this.Discount = null
 }
}
</script>


<style lang="less" scoped>

</style>