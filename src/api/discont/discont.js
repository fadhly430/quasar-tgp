import {getApiNoAuth2} from '../utils'

export default
{
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
}