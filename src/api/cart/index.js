
import {getApiNoAuth2} from '../utils.js'

export default
{
    postmessagedata(window, KodeProduk, SubTotal)
    {
        console.log(KodeProduk, SubTotal)
    return getApiNoAuth2()
    .post('carts', 
        {
            "KodeProduk": KodeProduk,
            "SubTotal": SubTotal
           
        }
    )
    .then(function (response)
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
