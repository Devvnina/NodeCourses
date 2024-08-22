var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
//Leer todos
router.get('/', usersController.getAll);
//Crear
router.post('/', usersController.create);

router.post('/login', usersController.validate);

module.exports = router;
