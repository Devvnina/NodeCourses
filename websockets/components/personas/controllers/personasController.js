let PersonasServices = require("../services/personasService");

class PersonasController{

    async getUsers(req, res, next){
        try {
            let personas = await PersonasServices.getUsers();
            res.render('index', {personas} );
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next){
        try {
            await PersonasServices.createUser(req.body);  
            res.redirect('/personas');
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new PersonasController()