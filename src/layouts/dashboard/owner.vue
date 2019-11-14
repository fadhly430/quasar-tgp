<template>
    <q-layout view="lhh lpR fff" class="bg-grey-3">
      
        <q-drawer show-if-above v-model="left" side="left" bordered content-class="bg-grey-10">
        <div class="column" style="height: 20px"/>
        <div class="row justify-center items-center">
            <div class="col-1"/>
            <div class="col-2">
                <q-item-section avatar>
                    <q-icon name="face" color="white"  size="30px"/>
                </q-item-section>
            </div>
            <div class="col">
                <div class="text-h6 text-white">Owner TGProject</div>
            </div>

            <q-item clickable tag="a" href="/#/account">
              <q-item-section>
                <q-item-label class="text-white text-body1">Logout</q-item-label>
              </q-item-section>
            </q-item>

        </div>
        <div class="column" style="height: 20px"/>
        <q-separator color="blue-grey-3" inset />
        <div class="column" style="height: 20px"/>
        
        <q-list padding class="rounded-borders">
            <q-item clickable v-ripple @click="$router.replace('/owner')">
              <q-item-section avatar>
                <q-icon size="30px" name="insert_chart_outlined" color="grey-3" />
              </q-item-section>

              <q-item-section>
                <div class="text-white text-body1">Dasbor</div>
              </q-item-section>
            </q-item>
            
            <div class="column" style="height: 20px"/>
            
            <q-expansion-item header-class="text-white" expand-separator icon="dvr" label="Table" class="text-body1" :content-inset-level="1" default-opened >
                <q-card class="bg-grey-10">
                  <q-card-section>
                    <q-item clickable v-ripple @click="$router.replace('/owner/tabelapparel')">
                    <q-item-section>
                      <div class="text-white text-body1">Apparel</div>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple @click="$router.replace('/owner/tabelwallet')">
                    <q-item-section>
                      <div class="text-white text-body1">Wallet</div>
                    </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple @click="$router.replace('/owner/tabelsepatu')">
                    <q-item-section>
                      <div class="text-white text-body1">Shoes</div>
                    </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
            </q-expansion-item>
            
            <div class="column" style="height: 20px"/>
            
            <q-item clickable v-ripple @click="$router.replace('/owner/message')">
              <q-item-section avatar>
                <q-icon size="30px" name="insert_comment" color="grey-3"/>
              </q-item-section>

              <q-item-section>
                <div class="text-white text-body1">Message</div>
              </q-item-section>
            </q-item>
            
            <div class="column" style="height: 20px"/>
            
            <q-item clickable v-ripple @click="$router.replace('/owner/order')">
              <q-item-section avatar>
                <q-icon size="30px" name="shop_two" color="grey-3"/>
              </q-item-section>

              <q-item-section>
                <div class="text-white text-body1">Order</div>
              </q-item-section>
            </q-item>

            <div class="column" style="height: 20px"/>
            
            <q-item clickable v-ripple @click="$router.replace('/owner/coupons')">
              <q-item-section avatar>
                <q-icon size="30px" name="style" color="grey-3"/>
              </q-item-section>

              <q-item-section>
                <div class="text-white text-body1">coupons</div>
              </q-item-section>
            </q-item>
        </q-list>

        </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  },
async  mounted(){
    let getRole = await localStorage.getItem('role');
    if(getRole !='owner' || getRole ==='admin'){
         this.$router.push('/admin/')
      }
     if(getRole !='owner' || getRole ==='customer'){
         this.$router.push('/TGProject')
      } else {
        alert('anda login sebagai owner')
      } 
    } 
}
</script>


<style lang="less" scoped>

</style>