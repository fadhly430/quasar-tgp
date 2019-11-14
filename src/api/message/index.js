
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
    },

    getmessage(window) {
        return getApiNoAuth2()
          .get('messages')
          .then(function (response) {
            console.log(response)
            return response.data
          }).catch(function (err) {
            console.log(err)
          })
      },

      deletemessage(window, id){
          return getApiNoAuth2()
          .delete('/messages/'.concat(id))
          .then(function(response){
              console.log(response)
              return response.data
          }).catch(function(err){
              console.log(err)
          })
        },

  updatemessage(window,id,Name,Email,Phone,Message)
  {
      return getApiNoAuth2()
      .put('/messages/'+id,
      {
          Name : Name,
          Email : Email,
          Phone : Phone,
          Message : Message 
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
