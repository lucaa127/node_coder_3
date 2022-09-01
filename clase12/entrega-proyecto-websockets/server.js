const express = require('express');
const handlebars = require('express-handlebars');
const productos = require('./src/productos.js');

const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const path = require('path');
const app = express();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

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


const productosRouter = require('./src/routes/productos.routes.js');

app.use('/api/productos', productosRouter);


app.get('/', (req, res)=>{
    res.render('form');
    
})

const PORT = 3000;
const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})



io.on('connection', async function (socket){
    console.log(`Nuevo cliente conectado! ${socket.id}`);
    const listarProds = await productos.listarProductos();

//productos
    socket.emit('from-server-data', {listarProds});

    socket.on('from-client-data', async function (data) {
        await productos.agregarProducto(data);
        const listarProds = await productos.listarProductos();
        
        io.sockets.emit('from-server-data', {listarProds});
    });

//chat
    socket.emit('from-server-mensajes', {CHAT_MENSAJES});

    socket.on('from-client-mensaje', mensaje => {
        CHAT_MENSAJES.push(mensaje);
        io.sockets.emit('from-server-mensajes', {CHAT_MENSAJES});
    });

})