<template>
    <div class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="row">
            <div class="col-1 q-gutter-xl"/>
            <div class="col">
                <div class="text-body1 text-bold text-grey-5" @click="$router.replace('/account')">Logout</div>
                <div style="height: 20px"/>
                <div class="text-h5 text-bold text-grey-9">My Account - {{account.firstName}}</div>                
            </div> 
        </div>
        <div class="row" style="height:30px"/>
        <div class="row">
            <div class="col-1 q-gutter-xl"/>
             <div class="col-7  ">
             <q-table  :data="data" :columns="columns" row-key="name"/>   
            </div>
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-xl">
                <q-separator  color="blue-grey-3" vertical />
            </div>
            <div class="col">
                <div class="text-center text-body1 text-grey-5">Primary address</div>
                <div style="height: 10px"/>
                <q-separator  color="blue-grey-3"  inset />
                <div style="height: 10px"/>
                <div class="text-center text-body text-grey-6"> isi nya alamat</div>
            </div>
        
        </div>

        <div class="column" style="height: 100px"/>        
    </div>
</template>

<script>
import acc from '../api/login/index';
export default {
   data()
   {
       return{
           account:[],
         columns: [
            {name: '', required: true, label: 'Order', align: 'left', format: val => `${val}`, sortable: true},
            { name: '', label: 'Date', field: 'calories', sortable: true },
            { name: '', label: 'Payment Status', field: 'fat', sortable: true },
            { name: '', label: 'Fulfillment Status', field: 'carbs' },
            { name: '', label: 'total', field: 'protein' }
            ],  
        }
    } ,

    async mounted(){
    let getid = localStorage.getItem('id_customer')    
    const response = await
    acc.getaccount(window,getid)
    {
     return this.account = response
      console.log(response)
    }
  },


}
</script>

<style lang="sass" scoped>

</style>