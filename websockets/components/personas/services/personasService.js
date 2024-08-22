class PersonasServices{
    constructor(){
        this.personas = [];
    }
    async getUsers(){
        try {
            return this.personas;
        } catch (error) {
            console.log(error);
        }
    }
    async createUser(data){
        try {
            this.personas.push(data);
            return this.personas;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new PersonasServices()