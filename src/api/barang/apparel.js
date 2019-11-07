import {getApiNoAuth} from '../utils'

export default
{
    postapparelsdata(window)
    {
    return getApiNoAuth()
    .get('apparels')
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

    getapparelsdata(window)
    {
        return getApiNoAuth()
        .get('apparels')
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
    deletapparelsdata(window,id)
    {
        return getApiNoAuth()
        .delete('/apparels/'.concat(id))
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
    updateapparelsdata(windows,id,kodeapp,namaapp,ukuranapp,stockapp,hargaapp)
    {
        return getApiNoAuth()
        .put('/apparels/'+id,
        {
          kodeapp : kodeapp,
          namaapp : namaapp,
          ukuranapp : ukuranapp,
          stockapp : stockapp,
          hargaapp : hargaapp  
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