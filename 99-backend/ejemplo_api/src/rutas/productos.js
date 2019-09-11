const { Router } = require('express');
const ruta = Router();
const productos = require('../../productos.json');
const _ = require('underscore');

// console.log(precio);
//configuracion de la ruta
console.log(productos.length);
//peticion get
ruta.get('/',( req, res ) => {
   // res.send('lista de precio desde * resApi');
    res.json(productos);

});

//peticion post
/*
codigo: '4075013',
    descri: 'Prueba enviada',
    medida: 'paq',
    precio: 5.94 
*/
ruta.post('/', (req, res) => {
     console.log(req.body);
    const {codigo,descri,medida,precio} = req.body;
    if( codigo &&  descri && medida && precio){
        //para pasar todos lo de un objeto a otro ...lostres punto
        const id =productos.length + 1;
        console.log(id); 
        const nuevoProducto = {...req.body,id};
        console.log(nuevoProducto);
        
        productos.push(nuevoProducto);

        res.json(productos);
    }  else {
        res.status(500).json({error: 'Sucedio un error'});

    }
});
// metodo put sirve para actulizar
ruta.put('/:id', ( req, res ) => {
    const { id  } = req.params;
    const {codigo,descri,medida,precio} = req.body;
   
    if ( codigo &&  descri && medida && precio) {
        
        _.each(productos, (producto, i) => {
            if(producto.id == id) {
                producto.codigo = codigo;
                producto.descri = descri;
                producto.medida = medida;
                producto.precio = precio;
            }

        });
        res.send(productos);
    } else {
        res.status(500).json({error: 'hubo un error'});
    }
    res.send(productos);
});


// metodo delete
ruta.delete('/:codigo', ( req, res ) => {
    // req.params envia los parametros
  const { codigo } = req.params;
  _.each(productos, (producto, i) => {
       if (producto.codigo == codigo) {
          // console.log(producto.codigo);
          // console.log(codigo);
           productos.splice(i, 1);
          // console.log(req.params);
       }
   });
   //console.log(req.params);
     
 // var months = ['Jan', 'May', 'April', 'June'];
 // months.splice(0, 1);
// inserts at index 1
// console.log(months);
    res.send(productos); // una vez eliminado envia arreglo actulizado
 });


module.exports =ruta;
