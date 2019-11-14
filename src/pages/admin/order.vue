<template>
    <div class="q-pa-md">
        <div class="column" style="height: 7px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row ">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE order</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    
                    </div>
                </div>
            </div>
        </div>
        <div class="column" style="height: 20px"/>
        <q-separator color="grey-10" inset />
        <div class="column" style="height: 50px"/>
        

        <q-list bordered class="rounded-borders bg-white text-white">
          <q-item class="bg-primary">
            <q-item-section avatar top class="col-1 gt-xl text-center" style="align : left">
                <q-item-label class="q-mt-sm">No</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xl text-center" style="align : left">
                <q-item-label class="q-mt-sm">ID Customer</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">ID Barang</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Shipping</q-item-label>
            </q-item-section>
            
            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Jumlah</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Total</q-item-label>
            </q-item-section>

            <q-item-section top class="col-1 gt-xm">
                <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
            </q-item-section>
          </q-item>
        
        <q-item v-for="(mesen, index) in orders" :key="mesen.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xl text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{mesen.id_customer}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{mesen.id_barang}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{mesen.Shipping}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{mesen.Jumlah}}</q-item-label>
          </q-item-section>
        
        <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{mesen.Total}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(mesen.id)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

  

    </div> 
</template>

<script>
import order from '../../api/payment/index';
import acc from '../../api/login/index';

export default {
  data () {
    return {
      orders: [{}],
                
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    order.getorder(window)
    {
      this.orders = response
    }
  },

  methods : {
    onDelete(id){
      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
      order.deleteorder(window.id)
              
       .then((res) => {
          order.getorder(window)
         
          .then((res)=>{
            this.frombajus=res.data
            this.$router.go('owner/order')
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
    async mounted(){
      
    const response = await
    acc.getaccount(window,id_customer)
    {
     return this.account = response
      console.log(response)
    }
  },

    batal(){
      this.dialog = false
    },
  }
 }
</script>


<style lang="less" scoped>

</style>