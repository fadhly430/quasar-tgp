
import {getApiNoAuth} from '../utils.js'

export default
{
    postmessagedata(window)
    {
    return getApiNoAuth()
    .get('message')
    .then(function (response)
        {
            console.log(response)
            return response.data
        })
        .catch(function(err)
        {
            console.log(err)
        })
    }}
