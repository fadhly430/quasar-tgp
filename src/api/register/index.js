import { getApiNoAuth } from '../utils.js'

export default {
    postUser(credentials, window) {
        return getApiNoAuth().post('/users', credentials)
            .then(function (response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })  
    },
}































// import {getApiNoAuth} from '../utils.js'



// export default {
//     registerUser(first_name, last_name, email, password,  window){ 
//         console.log(first_name, last_name, email, password)
     

//         return getApiNoAuth()
//         .post('/users/',
//         {
//             "firstName": first_name,
//             "lastName": last_name,
//             "email": email,
//             "password": password,
            
//            })
        

//         .then(function(response){
//             console.log(response)
//             // localStorage.setItem('token', response.data.id);
//             // localStorage.setItem('userId', response.data.userId)
//             return response.data;
//         }).catch(function(err){
//             console.log(err)
//         })
//     }
// }
