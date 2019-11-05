<template>
    <div  class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="row items-center">
            <div class="col-5">
              <q-separator color="blue-grey-3" inset />
            </div>
          <div class="col-2">
          <div class="text-h5 text-center text-weight-regular">Wallet</div>
          </div>
          <div class="col-5">
            <q-separator color="blue-grey-3" inset />
          </div>
        </div>
        <q-form id= "formlogin" @submit="postwallet" class="q-gutter-md " >
            <q-input filled v-model="KodeBarang" label="Kode Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
            <q-input filled v-model="Nama" label="Nama Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
            <q-input filled v-model="Stock" label="Stock Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
           <q-input filled v-model="Harga" label="Harga Wallet"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
            <q-uploader v-model="Img" label="Upload Img" auto-upload :url="getUrl" multiple />
      <div>
        <q-btn label="Add Data" type="submit" color="primary"/>
      </div>
    </q-form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#formlogin
{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
} 
</style> 