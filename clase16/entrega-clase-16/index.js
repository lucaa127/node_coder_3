import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const CHAT_MENSAJES = [];


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));


import { ContenedorSQL } from './src/container/ContenedorSQL.js'

const apiProductos = new ContenedorSQL('productos');


app.get('/', (req, res)=>{
    res.render('form');
    
})

const PORT = 3000;
const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})



io.on('connection', async function (socket){
    console.log(`Nuevo cliente conectado! ${socket.id}`);
    const listarProds = await apiProductos.listarProductos();

//productos
    socket.emit('from-server-data', {listarProds});

    socket.on('from-client-data', async function (data) {

        await apiProductos.insertarProducto(data);
        const listarProds = await apiProductos.listarProductos();

        io.sockets.emit('from-server-data', {listarProds});
    });

//chat
    socket.emit('from-server-mensajes', {CHAT_MENSAJES});

    socket.on('from-client-mensaje', mensaje => {
        CHAT_MENSAJES.push(mensaje);
        io.sockets.emit('from-server-mensajes', {CHAT_MENSAJES});
    });

})