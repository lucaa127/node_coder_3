const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//          - ruouter
const productosRouter = require('./src/routes/productos.routes.js');
const carritoRouter = require('./src/routes/carrito.routes.js');

app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);


app.get('/', (request,response)=>{
    response.send('1ra entrega Proyecto Final');
});
app.get('*', (request,response)=>{
    const metodo = request.method;
    const ruta = request.originalUrl;

    response.send(`{error : -2, descripcion: 'ruta ${ruta} método ${metodo}, no implementada'}`);
});


const PORT = 8080;
const server = app.listen(PORT, ()=>{
 console.log(`Escuchando en puerto: ${PORT}`);
});

