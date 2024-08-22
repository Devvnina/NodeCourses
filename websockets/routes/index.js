let users = require("../components/users");
let personas = require("../components/personas");
let chat = require("../components/chat");


module.exports = (app) => {
    users(app);
    personas(app);
    chat(app);
    // auth(auth);
    app.get("/", (req, res, next)=>{
        res.send("OK!");
    });
}