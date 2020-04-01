const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ee8d3a7b4671056d82ef69c9cb35294d&units=metric`);

    return resp.data.main.temp;
}




module.exports = {

    getClima
}