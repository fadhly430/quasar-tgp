import {getApiNoAuth2} from '../utils'

export default
{
    postorder(window)
    {
    return getApiNoAuth2()
    .get('')
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

        getorder(window) {
          return getApiNoAuth2()
            .get('')
            .then(function (response) {
              console.log(response)
              return response.data
            }).catch(function (err) {
              console.log(err)
            })
        },

        deleteorder(window, id){
            return getApiNoAuth2()
            .delete('//'.concat(id))
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
          },

    updateorder(window,id,KodeApparel,NamaApparel,UkuranApparel,StockApparel,HargaApparel,ImgApparel)
    {
        return getApiNoAuth2()
        .put('//'+id,
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