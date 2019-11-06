
import {getApiNoAuth2} from '../utils.js'

export default
{
    postcustomerdata(window, FNama, LNama, Alamat, Kecamatan, Kota, Negara, Provinsi, Kodepos, Diskon)
    {
    return getApiNoAuth2()
    .post('customer', 
        {
            "FNama": FNama,
            "LNama": LNama,
            "Alamat": Alamat,
            "Kecamatan": Kecamatan,
            "Kota": Kota,
            "Negara": Negara,
            "Provinsi": Provinsi,
            "Kodepos": Kodepos
           
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
