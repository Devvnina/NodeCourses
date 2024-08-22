let ChatServices = require("../services/chatService");

class ChatController{

    async init(req, res, next){
        try {
            let midata = req.query || [];
            res.render('chat', midata );
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next){
        try {
            await ChatServices.createUser(req.body);  
            res.redirect('/chat');
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ChatController()