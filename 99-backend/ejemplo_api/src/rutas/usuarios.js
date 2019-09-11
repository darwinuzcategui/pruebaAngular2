const { Router } = require('express');
const ruta = Router();
const fecth =  require('node-fetch');

ruta.get('/', async (req, res)=> {
     const respuesta = await fecth('https://jsonplaceholder.typicode.com/users');
    
    const usuarios = await respuesta.json() // respueta es un string asi seconvierte en json

    console.log(usuarios);
    
    res.json(usuarios);

});

module.exports =ruta;
