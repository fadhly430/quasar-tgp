import { getApiNoAuth2 } from "../utils"

export default {
    getcontainer(window){
        console.log(window, file, container)
        return getApiNoAuth2()
        .get('container/images/files')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    getcontainer(window, file, container){
        return getApiNoAuth2()
        .get('container/'+container+'/files/'+file)
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postcontainer(window, container,name){
        return getApiNoAuth2()
            .post('/container/images/files/' ,{
                Nama : name,
                Container : container
            })
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
        },
    deletecontainer(window, name){
        return getApiNoAuth2()
        .delete('/container/images/files/'.concat(name))
            .then (function(response) {
                console.log(response)
                return response.data
            })
            .catch (function(err){
                console.log(err)
            })
        
    }
}