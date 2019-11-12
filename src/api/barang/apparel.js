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

    updateBarangApparel(window,id,KodeApparel,NamaApparel,UkuranApparel,StockApparel,HargaApparel,ImgApparel)
    {
        return getApiNoAuth2()
        .put('/formbajus/'+id,
        {
            KodeApparel : KodeApparel,
            NamaApparel : NamaApparel,
            UkuranApparel : UkuranApparel,
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
    }

}