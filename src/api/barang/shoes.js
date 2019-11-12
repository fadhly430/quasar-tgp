import {getApiNoAuth2} from '../utils'

export default
{
    postShoessdata(window)
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

    postproduct(window,KodeShoes,NamaShoes,KeteranganShoes,StockShoes,HargaShoes,ImgShoes){
        return getApiNoAuth2()
        .post('/formsepatus/' ,{
            KodeShoes : KodeShoes,
            NamaShoes : NamaShoes,
            KeteranganShoes : KeteranganShoes,
            StockShoes : StockShoes,
            HargaShoes : HargaShoes,
            ImgShoes: 'http://localhost:3000/api/container/images/download/'+KodeShoes+ '.jpg'
            
            
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
    

        getBarangShoes(window) {
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

    updateBarangShoes(window,id,KodeShoes,NamaShoes,KeteranganShoes,StockShoes,HargaShoes,ImgShoes)
    {
        return getApiNoAuth2()
        .put('/formsepatus/'+id,
        {
            KodeShoes : KodeShoes,
            NamaShoes : NamaShoes,
            KeteranganShoes : KeteranganShoes,
            StockShoes : StockShoes,
            HargaShoes : HargaShoes,
            ImgShoes : ImgShoes  
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