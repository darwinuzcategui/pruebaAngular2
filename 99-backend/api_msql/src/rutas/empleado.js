const express = require('express');
const ruta = express.Router();
// requerimos la conexion
const mysqlConexion = require('../database');
// CREAMOS LAS URL

ruta.get('/', (req,res) => {
    mysqlConexion.query('SELECT * FROM empleado', (err, rows, fields)=> {
        if(!err) {
            res.json(rows);

        } else {
            console.log('error enconexion',err);
            
        }

    });

});


ruta.get('/:id', (req,res) => {
    const { id } = req.params;
    mysqlConexion.query('SELECT * FROM empleado WHERE id = ?',[id], (err, 
        rows, fields)=> {
            if(!err) {
                res.json(rows[0]);
    
            } else {
                console.log(err);
                
            }

    });
   // console.log(id);
    
});
//***********************************
/*
const query = `
      SET @id = ?;
      SET @nombre = ?;
      SET @salario = ?;
      CALL empleadoIncOEdit(@id, @nombre, @salario);
    `;
    */
ruta.post('/', (req, res) => {
    const {id, nombre, salario} = req.body;
    console.log(id, nombre, salario);
    const query = `
      CALL empleadoIncOEdit(?, ?, ?);
    `;
    mysqlConexion.query(query, [id, nombre, salario], ( err, rows, fields) =>{
        if(!err) {
            res.json({Status: 'Empleado Guardado'});

        } else {
            console.log(err);
            
        }

    });

});

ruta.put('/:id', (req, res) => {
    const { nombre, salario } = req.body;
    const { id } = req.params;
    const query = `
    CALL empleadoIncOEdit(?, ?, ?);
    `;
    mysqlConexion.query(query, [id, nombre, salario], ( err, rows, fields) =>{
      if(!err) {
        res.json({status: 'Empleado actulizado'});
      } else {
        console.log(err);
      }
    });
  });

  ruta.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConexion.query('DELETE FROM empleado WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado  Eliminado'});
      } else {
        console.log(err);
      }
    });
  });






module.exports = ruta;