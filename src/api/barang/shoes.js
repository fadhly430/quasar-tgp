import {getApiNoAuth2} from '../utils'

export default
{
    postdShoesdata(window)
    {
    return getApiNoAuth2()
    .get('formsepatus')
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

        getBarangdShoes(window) {
          return getApiNoAuth2()
            .get('formsepatus')
            .then(function (response) {
              console.log(response)
              return response.data
            }).catch(function (err) {
              console.log(err)
            })
        },

        deleteBarangShoes(window, id){
            return getApiNoAuth2()
            .delete('/formsepatus/'.concat(id))
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
          },

    updateBarangShoes(window,id,KodedShoes,NamadShoes,UkurandShoes,StockdShoes,HargadShoes,ImgdShoes)
    {
        return getApiNoAuth2()
        .put('/formsepatus/'+id,
        {
            KodedShoes : KodedShoes,
            NamadShoes : NamadShoes,
            UkurandShoes : UkurandShoes,
            StockdShoes : StockdShoes,
            HargadShoes : HargadShoes,
            ImgdShoes : ImgdShoes  
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