// import VueResource from 'vue-resource'
// import Vue from 'vue'
// import {getApiNoAuth2} from '../utils'

// Vue.use(VueResource)

import { getApiNoAuth2 } from "../utils"

export default {
    getproduct(window){
        return getApiNoAuth2()
        .get('Products')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    
    postproduct(window, product_name, harga,
        kuantity, product_kategory, product_desc, imgurl){
        return getApiNoAuth2()
        .post('/Products/' ,{
            product_name : product_name,
            harga : harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc,
            imgurl: 'http://localhost:3000/api/container/images/download/'+ product_name+ '.jpg'
            
            
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },

    deleteproduct(window, id){
        return getApiNoAuth2()
        .delete('/Products/'.concat(id))
        .then (function(response) {
        console.log(response)
        return response.data
        })
        .catch (function(err){
        console.log(err)
        })
    },
    putproduct(window, id, product_name, harga, kuantity, product_kategory, product_desc, imgurl){
        return getApiNoAuth2()
        .put('/Products/' + id ,{
            product_name: product_name,
            harga: harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc,
            imgurl: imgurl

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    },

    downloadImage(window, file){
        return getApiNoAuth2()
        .get('container/images/download/'+file)
        .then(function(response){
            return response.config
        })
        .catch (function(err){
            console.log(err)
        })
      }
}





// export default{
//     getProduct(window){
//         return getApiNoAuth2()
//         .get('http://localhost:3000/api/')
//         .then(function (response){
//             return response.data
//         }).catch(function(err){
//             console.log(err)
//         })
//     },
//     submitProduct(window, param){
//         return getApiNoAuth2()
//         .post('http://localhost:3000/api/', param)
//         .then (function(result){
//             console.log(response)
//             return response.data
//         }).catch(function(err){
//             console.log(err)
//         })
//         }
// }