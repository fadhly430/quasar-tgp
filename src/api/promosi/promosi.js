import {getApiNoAuth} from '../utils.js'

export default
{
    postpromotedata(window)
    {
    return getApiNoAuth()
    .get('promotes')
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
