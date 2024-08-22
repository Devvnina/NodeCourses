let express = require("express");
var exphbs  = require('express-handlebars');
let cors = require("cors");
let axios = require("axios");
let {config} = require("./config")
let serverRoutes = require("./routes");
let fs = require("fs");
let path = require("path");
let multer = require("./utils/middlewares/multer");
let Sockets = require("./utils/sockets");
const { Server: HttpServer } = require('http');


// Initializations
let app = express();
let httpServer = new HttpServer(app);
// const io = new IOServer(httpServer);
let socket = new Sockets(httpServer);
socket.listenConnection();
// io.emit



// Settings 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/uploads'));


app.set('views', path.join(__dirname,'views', 'ejs')); 
app.set('view engine', 'ejs'); 


// Middlewares
app.use(cors(`${config.cors}`))


// Global Variables
const PORT = config.port;

// Routes
serverRoutes(app);

// Start the server
httpServer.listen(PORT, ()=>{
    console.log("Server On! escuchando dotenv ", PORT, config.email_support);
})