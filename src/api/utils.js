import axios from 'axios'

const API_URL = 'http://localhost:8888/api/v9/';
const API_URL2 = 'http://localhost:3000/api/';

//API loopback
export function getApiNoAuth2(){
    return axios.create({
        baseURL: API_URL2,
        timeout:10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '',
            'Content-Type': 'application/json'
        }
    })
}

//API springboot
export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Content-Type': 'application/json'
        }
    })
}




// import axios from 'axios'

// const API_URL = 'http://localhost:8888/api/v9/';
// const API_URL2 = 'http://localhost:3000/api/';

// //API loopback
// export function getApiNoAuth2(){
//     return axios.create({
//         baseURL: API_URL2,
//         timeout:10000,
//         withCredentials: false,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json'
//         }
//     })
// }

// //API springboot
// export function getApiNoAuth(){
//     return axios.create({
//         baseURL: API_URL,
//         timeout: 10000,
//         withCredentials: false,
//         headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:8080',
//             'COntent-Type': 'application/json'
//         }
//     })
// }

// //token 
// export function getApi(token, params){
//     if(params){ params.access_token = token } else {
//         params = {
//             access_token: token
//         }
//     }
//     return axios.create({
//         baseURL: API_URL,
//         timeout: 100000,
//         withCredentials: false,
//         params: params,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json; charset=utf-8'
//         }
//     })
// }

// export function getApi2(token, params){
//     if(params){ params.access_token = token } else {
//         params = {
//             access_token: token
//         }
//     }
//     return axios.create({
//         baseURL: API_URL2,
//         timeout: 100000,
//         withCredentials: false,
//         params: params,
//         headers: {
//             'Access-Control-Allow-Origin': '',
//             'Content-Type': 'application/json; charset=utf-8'
//         }
//     })
// }