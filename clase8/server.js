const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));


const productosRouter = require('./src/routes/productos.routes.js');

app.use('/api/productos', productosRouter);


const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Escuchando puerto: ${PORT}`);
});


