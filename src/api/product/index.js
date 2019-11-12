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
    
    postproduct(window, kode_apparel, name_File, jumlah_stock, ukuran,
        harga, imgurl){
        return getApiNoAuth2()
        .post('/Products/' ,{
            kode_apparel : kode_apparel,
            name_File : name_File,
            jumlah_stock : jumlah_stock,
            ukuran : ukuran,
            harga : harga,
            imgurl: imgurl,
            imgurl: 'http://localhost:3000/api/container/images/download/'+ name_File+ '.jpg'
            
            
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){c
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
    putproduct(window, id, kode_apparel, name_File, jumlah_stock, ukuran,
        harga, imgurl){
        return getApiNoAuth2()
        .put('/Products/' + id ,{
            kode_apparel : kode_apparel,
            name_File : name_File,
            jumlah_stock : jumlah_stock,
            ukuran : ukuran,
            harga : harga,
            imgurl: imgurl,

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