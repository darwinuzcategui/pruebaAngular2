const app = require ('./app');
const { connect } = require('./database')

async function main() {
    // Database conexion
     await connect();
    // Aplicacion en express
    await app.listen(4850,);
    console.log('Servidor trabajando puerto 4850: Conectado');

}

main();
