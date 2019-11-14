
<template>
    <div class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="column">
            <q-item-label class="text-center text-h4">   LOGIN   </q-item-label>
        </div>
        <div class="column items-center">
            <div class="col-1" style="height: 20px"/>
            <div class="col-1">
                <div class="text-overline">Silakan masukkan email dan kata sandi Anda:</div>
            </div>
        </div>

<!-- Login  -->

        <div class="row justify-center">
            <div class="col-4 q-col-gutter-xl" style="widht: 300px">
                <q-input outlined v-model="email" label="Email"   />
            </div>
        </div>
        <div class="row justify-center" style="height: 20px"/>
        <div class="row justify-center">
            <div class="col-4 q-col-gutter-xl" style="widht: 300px">
                <q-input outlined label="Password" v-model="password" filled :type="isPwd ? 'password' : 'text'">
                    <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                    </template>
                </q-input>
            </div>
        </div> 
        <div class="row justify-center" style="height: 20px"/>
        <div class="row justify-center">
            <div class="col-4" style="width: 390px">
                <q-form  @submit="onSubmit" >
                <q-btn style="background: #283b39; color: white" label="Login" type="submit" class="full-width" />
            </q-form>
            </div>

        </div>

<!-- btn login -->

        <div class="column" style="height: 20px"/>
        <div class="row justify-center">
            <div class="col-2 q-col-gutter-xl">
                <div class="text-overline text-center">Belum punya akun?</div>
            </div>
            <div class="col-1">
                <div clickable tag="a" target="" class="text-overline" @click="$router.replace('/regis')">Buat akun</div>
                 <q-tooltip content-class="" :offset="[10, 10]">
          Klik saja untuk buat akun !
        </q-tooltip>
            </div>
        </div>

        <div class="column" style="height: 100px"/>

    </div>
</template>

<script>

import login from '../api/login/index'

export default {
    data()
    {
        return{        
        email: '',
        password: '',
        roles:'',
        isPwd: true
        }
    },

    methods : {
    onSubmit() {
      let self = this;
      login
      .loginUser(window, self.email, self.password )
      .then(function(result)
        {
            console.log(result);   
            if(result){
              localStorage.setItem('email', result.email)
              localStorage.setItem('role', result.role)
              localStorage.setItem('id_customer',result.id)

                 if(result.role=='admin'){
                self.$router.push('/admin/')
              } else if (result.role=='owner'){
                self.$router.push('/owner/')
              } else {
                self.$router.push('TGProject')
              }
            }
        })
      .catch(function(err){
        console.log(err);
      });
    }
  }

}
</script>
