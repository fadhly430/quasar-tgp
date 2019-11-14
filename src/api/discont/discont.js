import {getApiNoAuth2} from '../utils'

export default
{
getdiscont(window) {
    return getApiNoAuth2()
      .get('discounts')
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  },

  postdiscont(window,Discount,Coupons)
  {
    return getApiNoAuth2().post('discounts' ,{
      Discount : Discount,
      Coupons : Coupons
    })
    .then(function(response){
      console.log(response)
      return response.data
    })
    .catch(function(err){
      console.log(err)
    })
  },

  deletediscont(window, id){
    console.log(id)
    return getApiNoAuth2()
    .delete('/discounts/'.concat(id))
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  },
  
  updateBarangApparel(window,Discount,Coupons)
    {
        return getApiNoAuth2()
        .put('/discounts/'+id,
        {
          Discount : Discount,
          Coupons : Coupons  
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

}