<template>
    <div class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="column">
            <q-item-label class="text-center text-h4">   Registrasi   </q-item-label>
        </div>
        <div class="column items-center">
            <div class="col-1" style="height: 20px"/>
            <div class="col-1">
                <div class="text-overline">Silakan isi informasi di bawah ini:</div>
            </div>
        </div>

<!-- registrasi -->

        <div class="row justify-center">
            <div class="col-4 q-col-gutter-xl" style="widht: 300px">
                <q-input outlined v-model="firstName" label="Nama Depan"  :dense="dense" />
            </div>
        </div>
        <div class="row justify-center" style="height: 20px"/>
        <div class="row justify-center">
            <div class="col-4 q-col-gutter-xl" style="widht: 300px">
                <q-input outlined v-model="lastName" label="Nama Belakang"  :dense="dense" />
            </div>
        </div>
        <div class="row justify-center" style="height: 20px"/>
        <div class="row justify-center">
            <div class="col-4 q-col-gutter-xl" style="widht: 300px">
                <q-input outlined v-model="email" label="Email"  :dense="dense" />
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
        <div class="column" style="height: 100px"/>
         </div>
 
</template>

<script>
import register from "../api/Register/index";
export default {
    name: 'register',
    data () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isPwd: true
   
      }
    },
    methods: {
    onSubmit() {
        let credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          konfirm_password: this.konfirm_password 
        };
        const self = this;
        register
          .postUser(credentials, window)
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
        alert('Sukses')
        self.$router.push("/account");
      }
    }
   
}</script>