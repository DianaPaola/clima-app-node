const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        //timeout: 1000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '08609db898msh4beeee1d12c987dp1e7c8fjsn78bf79a96f63'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);


    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}