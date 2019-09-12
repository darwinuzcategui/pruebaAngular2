
const { Router } = require("express");
const router = Router();
// RUTAS
router.get('/test', ( req, res ) => {
    const datos= { 
        "titulo": "Lista de Precio","precio incluye Iva": "Si ","Orden": "Ordenado por Codigo",
         
        "lista Precio A" :[
        {"codigo":"001001", "descri":"Kelloggs Trifun FrootLoops-Pops-Apple Ja", "medida":"und", "precio":34.83 }, 
        {"codigo":"001002", "descri":"Kellogg's Special K Red Berries 2 Bags 2", "medida":"paq", "precio":32.66 }, 
        {"codigo":"001003", "descri":"Honey Bunches of Oats Twin Pack 2-bolsas", "medida":"", "precio":28.30 }, 
        {"codigo":"001004", "descri":"ChipsAhoy/Nutter Butter 2-bolsas", "medida":"", "precio":28.30 }
    ]};
  
    res.json(datos);

});
module.exports = router;