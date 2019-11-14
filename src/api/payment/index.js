
import {getApiNoAuth2} from '../utils.js'

export default
{
    postmessagedata(window,  id_barang, id_customer, FNama, LNama, 
        Alamat, Kecamatan, Kota, Negara,  Provinsi, Kodepos, 
        Tlp, Shipping , Jumlah, total)
    {
        return getApiNoAuth2()
    .post('payments', 
        {

            id_barang : id_barang,
            id_customer : id_customer,
            FNama : FNama,
            LNama: LNama,
            Alamat: Alamat,
            Kecamatan: Kecamatan,
            Kota: Kota,
            Negara: Negara,
            Provinsi: Provinsi,
            Kodepos: Kodepos,
            Tlp: Tlp,
            Shipping: Shipping,
            Jumlah : Jumlah,
            Total : Total
           
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

    getorder(window) {
        return getApiNoAuth2()
          .get('payments')
          .then(function (response) {
            console.log(response)
            return response.data
          }).catch(function (err) {
            console.log(err)
          })
      },

      deleteorder(window, id){
        return getApiNoAuth2()
        .delete('/formbajus/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
      },
}
