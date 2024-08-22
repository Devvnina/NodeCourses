let { Router } = require("express");
let router = new Router();

module.exports = (app) =>{
    app.use('/users', router);
    router.get("/", (req, res, next)=>{
        res.send("DESDE MI COMPONENTE USUARIOS PRUEBA DOS [INFRAESTRUCTURA]");
    })

    router.post("/", (req, res, next)=>{
        res.send("DESDE MI COMPONENTE USUARIOS post");
    })
}