import * as axios from 'axios';
import { getApiNoAuth2 } from "../utils"



const API_URL2_TGP = 'http://localhost:3000/api/container';
const API_URL2 = 'http://localhost:3000/api/container';

function upload(formData,id) {
  const url = `${API_URL2}/${id}/upload`;
  const containerUrl = `${API_URL2}`;
    return axios.post(containerUrl, { name : id } )
    .then(function (res) {
      return axios.post(url, formData)
    }).then(x => x.data)
    // add url field
    .then(x => x.map(img => Object.assign({},
      img, { url: `${API_URL2}/images/${img.id}` })));
}

function uploadTGP(formData) {
    const url = `${API_URL2}/images/upload`;
    return axios.post(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${API_URL2_TGP}/images/${img.id}` })));
  }

 function dwonloadTGP(window, file){
  return getApiNoAuth2()
  .get('container/images/download/'+file)
  .then(function(response){
      return response.config
  })
  .catch (function(err){
      console.log(err)
  })
}

export {upload, uploadTGP, dwonloadTGP }