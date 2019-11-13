import {getApiNoAuth2} from '../utils'

export default
{
    postWalletsdata(window)
    {
    return getApiNoAuth2()
    .get('formdompets')
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

    postproduct(window,KodeWallet,NamaWallet,KeteranganWallet,StockWallet,HargaWallet,ImgWallet){
        return getApiNoAuth2()
        .post('/formdompets/' ,{
            KodeWallet : KodeWallet,
            NamaWallet : NamaWallet,
            KeteranganWallet : KeteranganWallet,
            StockWallet : StockWallet,
            HargaWallet : HargaWallet,
            ImgWallet: 'http://localhost:3000/api/container/images/download/'+KodeWallet+ '.jpg'
            
            
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
    

        getBarangWallet(window) {
          return getApiNoAuth2()
            .get('formdompets')
            .then(function (response) {
              console.log(response)
              return response.data
            }).catch(function (err) {
              console.log(err)
            })
        },
        getbyidwallet(window,id) {
            return getApiNoAuth2()
              .get('formdompets/'+id)
              .then(function (response) {
                console.log(response)
                return response.data
              }).catch(function (err) {
                console.log(err)
              })
          },

        deleteBarangWallet(window, id){
            return getApiNoAuth2()
            .delete('/formdompets/'.concat(id))
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
          },

    updateBarangWallet(window,id,KodeWallet,NamaWallet,KeteranganWallet,StockWallet,HargaWallet,ImgWallet)
    {
        return getApiNoAuth2()
        .put('/formdompets/'+id,
        {
            KodeWallet : KodeWallet,
            NamaWallet : NamaWallet,
            KeteranganWallet : KeteranganWallet,
            StockWallet : StockWallet,
            HargaWallet : HargaWallet,
            ImgWallet : ImgWallet  
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