import {getApiNoAuth2} from '../utils'

export default
{
    postapparelsdata(window)
    {
    return getApiNoAuth2()
    .get('formbajus')
    .then(function (response)
        {
            console.log(response)
            return response.data
        })
        .catch(function(err)
        {
            console.log(err)
        })
    },

    postproduct(window,KodeApparel,NamaApparel,KeteranganApparel,StockApparel,HargaApparel,ImgApparel){
        return getApiNoAuth2()
        .post('/formbajus/' ,{
            KodeApparel : KodeApparel,
            NamaApparel : NamaApparel,
            KeteranganApparel : KeteranganApparel,
            StockApparel : StockApparel,
            HargaApparel : HargaApparel,
            ImgApparel: 'http://localhost:3000/api/container/images/download/'+KodeApparel+ '.jpg'
            
            
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
    

        getBarangApparel(window) {
          return getApiNoAuth2()
            .get('formbajus')
            .then(function (response) {
              console.log(response)
              return response.data
            }).catch(function (err) {
              console.log(err)
            })
        },

        getbyidApparel(window,id) {
            return getApiNoAuth2()
              .get('formbajus/'+id)
              .then(function (response) {
                console.log(response)
                return response.data
              }).catch(function (err) {
                console.log(err)
              })
          },

        deleteBarangApparel(window, id){
            return getApiNoAuth2()
            .delete('/formbajus/'.concat(id))
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
          },

    updateBarangApparel(window,id,KodeApparel,NamaApparel,KeteranganApparel,StockApparel,HargaApparel,ImgApparel)
    {
        return getApiNoAuth2()
        .put('/formbajus/'+id,
        {
            KodeApparel : KodeApparel,
            NamaApparel : NamaApparel,
            KeteranganApparel : KeteranganApparel,
            StockApparel : StockApparel,
            HargaApparel : HargaApparel,
            ImgApparel : ImgApparel  
        })
        .then(function(response)
        {
            console.log(response)
            return response.data
        })
        .catch(function(err)
        {
            console.log(err)
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