var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")
/* GET home page. */
router.get('/', productosController.getAll) 

module.exports = router;
