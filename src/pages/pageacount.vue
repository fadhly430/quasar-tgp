<template>
    <div class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="row">
            <div class="col-1 q-gutter-xl"/>
            <div class="col">
                <div class="text-body1 text-bold text-grey-5">Logout</div>
                <div style="height: 20px"/>
                <div class="text-h5 text-bold text-grey-9">My Account</div>                
            </div> 
        </div>
        <div class="row" style="height:30px"/>
        <div class="row">
            <div class="col-1 q-gutter-xl"/>
             <div class="col-7">
             <q-table  :data="data" :columns="columns" row-key="name"/>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data()
   {
       return{
         columns: [
            {
            name: 'name',
            required: true,
            label: 'Order',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
            },
            { name: 'calories', label: 'Date', field: 'calories', sortable: true },
            { name: 'fat', label: 'Payment Status', field: 'fat', sortable: true },
            { name: 'carbs', label: 'Fulfillment Status', field: 'carbs' },
            { name: 'protein', label: 'total', field: 'protein' }
            ],  
        }
    } 
}
</script>

<style lang="sass" scoped>

</style>