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

    updateBarangWallet(window,id,KodeWallet,NamaWallet,UkuranWallet,StockWallet,HargaWallet,ImgWallet)
    {
        return getApiNoAuth2()
        .put('/formdompets/'+id,
        {
            KodeWallet : KodeWallet,
            NamaWallet : NamaWallet,
            UkuranWallet : UkuranWallet,
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
    }

}