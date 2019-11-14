<template>
    <div class="q-pa-md">
        <div class="column" style="height: 7px"/>
        <div class="row">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col">
                <div class="row ">
                    <div class="col-2">
                        <div class="text-h6 ">TABLE Message</div>
                    </div>
                    <div class="col-8 q-col-gutter-xl"/>
                    <div class="col-2">
                    <!-- <q-btn-dropdown icon="notification_important" flat label="Notification"/> -->
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
                <q-item-label class="q-mt-sm">Nama</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Email</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Phone</q-item-label>
            </q-item-section>
            
            <q-item-section top class="col-4 gt-xm text-center" style="align : center">
                <q-item-label class="q-mt-sm">Message</q-item-label>
            </q-item-section>

            <q-item-section top class="col-1 gt-xm">
                <q-item-label class="q-mt-sm flex flex-center"></q-item-label>
            </q-item-section>
          </q-item>
        
        <q-item v-for="(massage, index) in messages" :key="massage.id" class="bg-grey-3 text-black" line="1">
          <q-item-section avatar top class="col-1 gt-xl text-center">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xl text-center" style="align : left">
              <q-item-label class="q-mt-sm">{{massage.Name}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{massage.Email}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{massage.Phone}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-4 gt-xm text-center" style="align : center">
              <q-item-label class="q-mt-sm">{{massage.Message}}</q-item-label>
          </q-item-section>
        
          <q-item-section top class="col-1 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(formbaju.id)" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="formpesan.Nama" label="Nama"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formpesan.Email" label="Email"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formpesan.Phone" label="Phone"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="formpesan.Message" label="Message"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
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

    </div> 
</template>

<script>
import pesan from '../../api/message/index';

export default {
  data () {
    return {
      messages: [{}],
          
      formpesan:{
        Name : '',
        Email : '',
        Phone : '',
        Message : ''
      },
      
      dialog: false,
      cancelEnabled: false,
      
    }
  },

  async mounted(){
    const response = await
    pesan.getmessage(window)
    {
      this.messages = response
    }
  },

  methods : {
    onDelete(id){
      if(confirm('Apakah anda yakin akan menghapus data ini ?'))
      {
       pesan.deletemessage(window.id)
              
       .then((res) => {
          pesan.getmessage(window)
         
          .then((res)=>{
            this.frombajus=res.data
            this.$router.go('owner/message')
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
    edit(massage) {
      try{
        this.dialog = true
        this.updateSubmit = true
        this.formpesan.id = massage.id
        this.formpesan.Name = massage.Name
        this.formpesan.Email = massage.Email
        this.formpesan.Phone = massage.Phone
        this.formpesan.Message = massage.Message
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
    apparel.updateBarangApparel(window,self.formpesan.id, self.formpesan.Name, 
    self.formpesan.Email, self.formpesan.Phone, self.formpesan.Message)

    .then(function(result)
    {
      self.$router.go('owner/message')
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