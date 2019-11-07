
import {getApiNoAuth2} from '../utils.js'

export default
{
    postmessagedata(window, FNama, LNama, Alamat, Kecamatan, Kota, Negara, Provinsi, Kodepos, Tlp, Shipping)
    {
        console.log(FNama, LNama, Alamat, Kecamatan, Kota, Negara, Provinsi, Kodepos, Tlp, Shipping)
    return getApiNoAuth2()
    .post('payments', 
        {
            "FNama": FNama,
            "LNama": LNama,
            "Alamat": Alamat,
            "Kecamatan": Kecamatan,
            "Kota": Kota,
            "Negara": Negara,
            "Provinsi": Provinsi,
            "Kodepos": Kodepos,
            "Tlp": Tlp,
            "Shipping": Shipping
           
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
