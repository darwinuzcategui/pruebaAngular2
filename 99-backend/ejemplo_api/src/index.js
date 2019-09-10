const express = require('express');
const app = express();

// requiererie

const morgan = require('morgan');


// configuracion
//app.set('port',3000);
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//process.env.PORT || 3000


// middlwhares
app.use(morgan('dev'));
//soporta los datos
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// RUTAS
//app.get('/', ( req, res ) => {
    app.use(require("./rutas/index"));
  
  //  res.json({"titulo": "hola mundo"});

//});

// iniciando servidor
app.listen(app.get('port'), ()=> {
   console.log( `servidor ejecuntadose puerto ${app.get('port') }`);

});