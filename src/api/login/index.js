// // import VueResource from 'vue-resource'
// // import Vue from 'vue'
// // import {getApiNoAuth} from '../utils.js'

// // Vue.use(VueResource)

// // export default {

// //   userlogin(window, firstName, password){
// //     // let self = this;
// //     try {
// //       const response = await getApiNoAuth()
// //         .get("/users/", self.firstName, self.password);
// //       console.log(response);
// //       return response.data;
// //     }
// //     catch (err) {
// //       console.log(err);
// //     }
// //   }
// // };


// import VueResource from 'vue-resource'
// import Vue from 'vue'
// import { getApiNoAuth } from '../utils'

// Vue.use(VueResource)

// export default {

//     loginUser(window) {
//         return getApiNoAuth().get('/login')
//             .then(function (response) {
//                 console.log(response)
//                 return response.data
//             }).catch(function (err) {
//                 console.log(err)
//             })
//     },

//     loginUser(window, firstName, password) {
//         return getApiNoAuth()
//             .get('/login/' + firstName + '/' + password)
//             .then(function (response) {
//                 console.log(response)
//                 return response.data
//             }).catch(function (err) {
//                 console.log(err)
//             })
//     },

// }




import VueResource from 'vue-resource'
import Vue from 'vue'
import { getApiNoAuth } from '../utils'

Vue.use(VueResource)

export default {

    // getUser(window) {
    //     return getApiNoAuth().get('/users')
    //         .then(function (response) {
    //             console.log(response)
    //             return response.data
    //         }).catch(function (err) {
    //             console.log(err)
    //         })
    // },

    loginUser(window, email, password) {

        return getApiNoAuth()
            .get('/users/' + email + '/' + password)
            .then(function (response) {
                console.log(response)
                return response.data
            }).catch(function (err) {
                console.log(err)
            })
    },

}