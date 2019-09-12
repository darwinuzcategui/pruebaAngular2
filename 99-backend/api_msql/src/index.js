const express = require ('express');
const  app = express();

// configuracion settigns
// const puerto = 3000;
app.set('puerto', process.env.PORT || 3000);

// middlewares son funciones que se procesa ante que llegue la funciones de l rutas
app.use(express.json());

// rutas
app.use(require('./rutas/empleado'));





// rutas

// Iniciando el servidor Strating the server
app.listen(app.get('puerto'), () => {
    console.log('Sevidor en Puerto ',app.get('puerto'));
    

});

