let { Router } = require("express");
let router = new Router();
let ChatController = require("./controllers/chatController")

module.exports = (app) =>{
    app.use('/chat', router);
    app.get("/", ChatController.init);
}