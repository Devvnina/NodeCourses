var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")

/* GET users listing. */
//Leer todos
//router.get('/', productosController.getAll); esto es el home
//Detalle del producto
//Leer por id
router.get('/:id', productosController.getById);
//Crear
router.post('/', productosController.create);
//actualizar
router.put('/:id', productosController.update);
//eliminar
router.delete('/:id', productosController.delete);

module.exports = router;
