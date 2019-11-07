import {getApiNoAuth2} from '../utils.js'

export default
{
    postmessagedata(window, email)
    {
    return getApiNoAuth2()
    .post('promotes', 
        {
            "Email" : email
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
