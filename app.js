const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//argv.direccion

let comando = argv._[0];
//console.log((argv.direccion).rainbow);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);
        //const temp = 10;
        return `El clima de ${direccion} es de ${temp} , ${coords.lng}.`;


    } catch (e) {
        return `No se pudo de terminar el clima de ${direccion}, ${e}`

    }


}



//lugar.getLugarLatLng(argv.direccion).then(console.log);
//clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);