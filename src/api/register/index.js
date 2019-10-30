import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils.js'

Vue.use(VueResource)

export default {
    registerUser(first_name, last_name, email, password, window){
        let self = this;
        return getApiNoAuth().post('/users', self.first_name, self.last_name, self.email, self.password)
        .then(function(response){
            console.log(response)
            // localStorage.setItem('token', response.data.id);
            // localStorage.setItem('userId', response.data.userId)
            return response.data;
        }).catch(function(err){
            console.log(err)
        })
    }
}
