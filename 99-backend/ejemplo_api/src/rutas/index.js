
const { Router } = require("express");
const router = Router();
// RUTAS
router.get('/test', ( req, res ) => {
    const datos= {
        "nombre": "Darwin",
        "apellido": "Uzcategui",
        "Edad": 46
    };
  
    res.json(datos);

});
module.exports = router;