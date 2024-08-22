let { Router } = require("express");
let router = new Router();
let personas = [];
let PersonasController = require("./controllers/personasController"); 

module.exports = (app) =>{
    app.use('/personas', router);

    router.get("/", PersonasController.getUsers);
    router.post("/", PersonasController.createUser);

}