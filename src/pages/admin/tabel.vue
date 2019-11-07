<template>
    <div class="q-pa-md">
        <div class="column" style="height: 7px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row ">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <q-btn-dropdown icon="notification_important" flat label="Notification"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" style="height: 20px"/>
        <q-separator color="grey-10" inset />
        <div class="column" style="height: 50px"/>
        <div class="row items-center">
            <div class="col-5">
              <!-- <q-separator color="blue-grey-3" inset /> -->
            </div>
          <div class="col-2">
          <div class="text-h5 text-center text-weight-regular"> Apparel</div>
          </div>
          <div class="col-5">
            <!-- <q-separator color="blue-grey-3" inset /> -->
          </div>
        </div>
        <div class="column" style="height: 50px"/>

        <div class="column">
          <div class="col-1 self-end">
             <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/admin/addapparel')"/>
          </div>
        </div>
<!-- apparel -->
      <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xs text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Apparel</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Nama Apparel</q-item-label>
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

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Harga</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
              <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(barang, index) in barangs" :key="barang.id" class="bg-grey-3" line="1">
          <q-item-section avatar top class="col-1 gt-xm text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{barang.KodeApparel}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.NamaApparel}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.StockApparel}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.UkuranApparel}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.ImgApparel}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.HargaApparel }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
<!--  -->

        <div class="column" style="height: 50px"/>
        <div class="row items-center">
            <div class="col-5">
              <q-separator color="blue-grey-3" inset />
            </div>
          <div class="col-2">
          <div class="text-h5 text-center text-weight-regular"> Wallet</div>
          </div>
          <div class="col-5">
            <q-separator color="blue-grey-3" inset />
          </div>
        </div>
        <div class="column" style="height: 50px"/>
        <div class="column">
          <div class="col-1 self-end">
             <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/admin/addwallet')"/>
          </div>
        </div>
<!-- Wallet -->
        <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xs text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Wallet</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Nama Wallet</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Stock</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Img</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Harga</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
              <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(barang, index) in barangs" :key="barang.id" class="bg-grey-3" line="1">
          <q-item-section avatar top class="col-1 gt-xm text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{barang.KodeWallet}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.NamaWallet}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.StockWallet}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.ImgWallet}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.HargaWallet }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
<!--  -->

        <div class="column" style="height: 50px"/>
        <div class="row items-center">
            <div class="col-5">
              <q-separator color="blue-grey-3" inset />
            </div>
          <div class="col-2">
          <div class="text-h5 text-center text-weight-regular">Shoes</div>
          </div>
          <div class="col-5">
            <q-separator color="blue-grey-3" inset />
          </div>
        </div>
        <div class="column" style="height: 50px"/>
        <div class="column">
          <div class="col-1 self-end">
             <q-btn flat color="primary" class="btn-fixed-width" icon="queue" label="Add Data" @click="$router.replace('/admin/addsepatu')"/>
          </div>
        </div>
<!-- Shoes -->
        <q-list bordered class="rounded-borders bg-white text-white">
        <q-item class="bg-primary">
          <q-item-section avatar top class="col-1 gt-xs text-center" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-sm text-center" style="align : left">
              <q-item-label class="q-mt-sm">Kode Shoes</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
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

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">Harga</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
              <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(barang, index) in barangs" :key="barang.id" class="bg-grey-3" line="1">
          <q-item-section avatar top class="col-1 gt-xm text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{barang.KodeShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.NamaShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.StockShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.UkuranShoes}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.ImgShoes}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.HargaShoes }}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
<!--  -->

    </div> 
</template>

<script>
import apparel from '../../api/barang/apparel';

// export default {
//   data () {
//     return {
//      jaket: [{}]
//     }
//   },
//   async mounted() {
//         const response = await
//         apparel. 
//           {
//             this.jaket = response
//           }
//   }
// }
</script>


<style lang="less" scoped>

</style>