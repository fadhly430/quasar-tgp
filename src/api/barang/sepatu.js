import {getApiNoAuth2} from '../utils'

export default
{
    postsepatudata(window)
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

    getsepatudata(window)
    {
        return getApiNoAuth2()
        .get('formsepatus')
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
    deletesepatudata(window,id)
    {
        return getApiNoAuth2()
        .delete('/formsepatus/'.concat(id))
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
    updatesepatudata(window,Hargasepatu,Kodesepatu,Ukuransepatu,Stocksepatu,Namasepatu,Imgsepatu)
    {
        return getApiNoAuth2()
        .put('/formsepatus/'+id,
        {
          Hargasepatu : Hargasepatu,
          Kodesepatu : Kodesepatu,
          Ukuransepatu : Ukuransepatu,
          Stocksepatu : Stocksepatu,
          Namasepatu : Namasepatu,
          Imgsepatu : Imgsepatu  
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
