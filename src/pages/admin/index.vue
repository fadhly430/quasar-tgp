<template>
    <div class="q-pa-md">
        <div class="column" style="height: 33px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row ">
                    <div class="col-2">
                        <div class="text-h6 ">DASHBOARD</div>
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

        <div class="row justify-center">
            <div class="col-3 q-col-gutter-md q-gutter-xl ">
                <q-card >
                    <div class="row ">
                            <div class="col-6">
                                <q-icon color="teal-4" name="supervisor_account" size="60px"/>
                            </div>
                            <div class="col-1">
                                <div class="column justify-center">
                                    <div class="col-1">
                                        <div class="text-right text-overline">Pendapatan</div>
                                    </div>
                                    <div class="col">
                                        <div class="text-right text-overline">data uang</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </q-card>
            </div>

            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-3 q-col-gutter-md q-gutter-xl">
                <q-card >
                        <div class="row ">
                            <div class="col-6">
                                <q-icon color="teal-4" name="supervisor_account" size="60px"/>
                            </div>
                            <div class="col-1">
                                <div class="column justify-center">
                                    <div class="col-1">
                                        <div class="text-right text-overline">Pengguna</div>
                                    </div>
                                    <div class="col">
                                        <div class="text-right text-overline">data akun</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </q-card>
            </div>

            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-3 q-col-gutter-md q-gutter-xl">
                <q-card >
                        <div class="row ">
                            <div class="col-6">
                                <q-icon color="teal-4" name="supervisor_account" size="60px"/>
                            </div>
                            <div class="col-1">
                                <div class="column justify-center">
                                    <div class="col-1">
                                        <div class="text-right text-overline">Order</div>
                                    </div>
                                    <div class="col">
                                        <div class="text-right text-overline">data masuk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </q-card>
            </div>

            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-3 q-col-gutter-md q-gutter-xl">
                <q-card >
                        <div class="row ">
                            <div class="col-6">
                                <q-icon color="teal-4" name="supervisor_account" size="60px"/>
                            </div>
                            <div class="col-1">
                                <div class="column justify-center">
                                    <div class="col-1">
                                        <div class="text-right text-overline">Message</div>
                                    </div>
                                    <div class="col">
                                        <div class="text-right text-overline">data masuk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </q-card>
            </div>

        </div>

        <div class="column" style="height: 100px"/>

        <div class="row justify-center">
            <div class="col-5">
                <q-card>
                    <commit-chart :data="apparel" ></commit-chart>
                </q-card>
            </div>

            <div class="col-1 q-gutter-xl"/>

            <div class="col-5">
                <q-card>
                    <commit-chart :data="wallet" ></commit-chart>
                </q-card>
            </div>
        </div>

        <div class="column" style="height: 50px"/>

         <div class="row justify-center">
            <div class="col-5">
                <div class="col-4">
                    <q-card>
                        <commit-chart :data="sepatu" ></commit-chart>
                    </q-card>
                </div>
            </div>
         </div>

        <div class="column" style="height: 50px"/>

        <div class="row justify-center">
            <div class="col-5">
                <div class="col-4">
                    <q-card>
                      <donut-chart :data="pengguna"></donut-chart>
                    </q-card>
                </div>
            </div>

            <div class="col-1 q-gutter-xl"/>

            <div class="col-5">
                <q-card id="size">
                    <pie-chart :data="allproduk"></pie-chart>
                </q-card>
            </div>
            
        </div>
    </div>
</template>

<script>
import CommitChart from '../../components/chart/CommitChart'
import DonutChart from '../../components/chart/DonutChart'
import PieChart from '../../components/chart/PieChart'

export default {

    components:{
    CommitChart,
    DonutChart,
    PieChart
    },

    data(){
    return{
      apparel: {
        labels: ['Korea Zipper Hoodie', 'Jutsu It Sweatshirt', 'Oke Boskuh Sweatshirt', 'Naisu Bomber', 
        'Neotokyo Bomber', 'Anti Mabu Bomber', 'Rilek Ranger Bomber', 'Gomenasai Bomber', 'Taiga Coach', 'Crazy Asian Coach'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Appalre'],
          backgroundColor: ['red', 'pink', 'purple', 'deep-puprle','indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green'],
          data: [10,5,5,15,15,25,20,30,34,35]
        }],
        option: {
          height: 200
      }
    },

    wallet: {
        labels: ['Keio Cision', 'Keio Nami', 'Keio Hexa Black', 'Clausa Zara', 'Adler Mojave', 'Livia Mac', 'Clausa Nami', 'Carrie Ruler','Adler Caren', 'Dwight Cision'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Walet'],
          backgroundColor: ['red', 'pink', 'purple', 'deep-puprle','indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green'],
          data: [6,13,9,20,19,32,25,29,30,21,28]
        }],
        option: {
          height: 200
      }
    },

    sepatu: {
        labels: ['Nolan Full White','Nolan Chery White','Nolan Beige Gray','Rua Fushia','Rua White tosca','Nolan Coral','Makara Coral','Saka Smoke','Niliwatu White','Makara Reef'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Shoes'],
          backgroundColor: ['red', 'pink', 'purple', 'deep-puprle','indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green'],
          data: [30,28,20,10,15,17,24,11,9,12]
        }],
        option: {
          height: 200
      }
    },

     allproduk: {
        labels: ['Apparel', 'Wallet', 'Shoes'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Apparel', 'Wallet', 'Shoes'],
          backgroundColor: ['blue', 'green','pink'],
          data: [209,232,176]
        }],
        option: {
          height: 200
      }
    },
    

     pengguna: {
        labels: ['Pengunjung', 'Pembeli',],
        datasets: [{
          label: ['Pengunjung', 'Pembeli'],
          backgroundColor: ['#f87979', '#3d65bd'],
          data: [50,30]
        }],
        option: {
          height: 200
      }
    }
  }
}
}
</script>


<style lang="less" scoped>

</style>