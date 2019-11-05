
import {getApiNoAuth2} from '../utils.js'

export default
{
    postmessagedata(window, message, name, email, phone)
    {
    return getApiNoAuth2()
    .post('messages', 
        {
            "Name" : name,
            "Email" : email,
            "Phone" : phone,
            "Message" : message
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
