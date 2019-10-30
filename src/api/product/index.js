import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth2} from '../utils'

Vue.use(VueResource)

export default{
    getProduct(window){
        return getApiNoAuth2()
        .get('http://localhost:3000/api/')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    submitProduct(window, param){
        return getApiNoAuth2()
        .post('http://localhost:3000/api/', param)
        .then (function(result){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
        }
}