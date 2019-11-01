import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils.js'

Vue.use(VueResource)

export default {

  userlogin(window, firstName, password){
    // let self = this;
    return getApiNoAuth()
      .get("/users/")
      .then(function(response) {
        console.log(response);
        
        return response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};


// loginUser(window, firstName, password){
//   return getApiNoAuth()
//   .post('api/v9/users', {
//     firstName : firstName,
//     password : password
//   })
//   .then(function (response){
//       console.log(response)
//       return response.data
//   }).catch(function(err){
//       console.log(err)
//   })
// }