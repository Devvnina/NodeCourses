
let { Server: IOServer } = require("socket.io");

class Sockets{
    static instancia;
    constructor(httpServer){
        if(!!Sockets.instancia){
            return Sockets.instancia;
        }
        Sockets.instancia = this; 
        this.io = new IOServer(httpServer);
        this.users = [];
        this.mensaje = [];
        this.mensajes2 = [
            {autor:"Camilo 2", mensaje: "Hola como estas?"},
            {autor:"Mauricio", mensaje: "Bien y vos?"},
            {autor:"Sebas", mensaje: "Muchachos, ven el cuadro negro?"}
        ]
    }

    listenConnection(){
        try {
            this.io.on('connection', socket =>{
                
                console.log("Nos conectamos a nuestro primer socket");
                socket.emit("init", this.mensaje);
                socket.on("notificacion", data =>{
                    console.log("Entrando data con Dani hincha del boca :", data);
                });

                socket.on("addUser", data =>{
                    console.log("addUser ---> ",data);
                    if(this.users.length > 0){
                        let verification = false;
                        this.users = this.users.map(user =>{
                            if(user.email == data.email){
                                verification = true;
                                return {
                                    id:socket.id,
                                    ...data,
                                    active:true
                                }
                            }else{
                                return user;
                            }
                        });
                        if(!verification){
                            this.users.push({
                                id:socket.id,
                                ...data,
                                active:true
                            });
                        }
                    }else{
                        this.users.push({
                            id:socket.id,
                            ...data,
                            active:true
                        });
                    }                    
                    this.io.sockets.emit("loadUsers", this.users);
                });
                socket.on("input", data =>{
                    console.log(data);
                    let res = {
                        socketId: socket.id,
                        ...data,
                        type: "message"
                    }
                    this.mensaje.push(res);
                    this.io.sockets.emit("fillIntoP", this.mensaje);
                });
                socket.on('disconnect', () => {
                    console.log("disconnect", socket.id);
                    let mensaje = ``;
                    for (let indice in this.users) {
                        if(this.users[indice].id == socket.id){
                            mensaje += `${this.users[indice].name} ha abandonado el chat`;
                            this.users[indice].active = false;
                        }
                    }
                    this.io.sockets.emit("loadUsers", this.users);
                    let res = {
                        socketId: socket.id,
                        mensaje,
                        type: "system"
                    }
                    this.mensaje.push(res);
                    console.log(res, this.users);
                    this.io.sockets.emit("fillIntoP", this.mensaje);
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Sockets;