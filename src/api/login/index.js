import { getApiNoAuth } from '../utils.js'

export default {

    loginUser(window, email, password) {
    // let self = this;
    return getApiNoAuth()
      .get('/users/'+email+'/'+ password)
      .then(function(response) {
        console.log(response);
        return response.data;
      })
      .catch(function(err) {
        console.log(err);
      })     
  },

  getaccount(window,id) {
    return getApiNoAuth()
      .get('users/'+id)
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  },
}