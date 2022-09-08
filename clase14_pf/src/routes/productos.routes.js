const express = require('express');
const { Router } = express;
const productosRouter = Router();

const productos = require('../productos.js');


productosRouter.get('/', async function(req,res) {
    let status = false;

    const listarProds = await productos.listarProductos();
        if (listarProds.length > 0){ 
            status = true;
        };
    res.send(listarProds);

});

productosRouter.get ('/:id', async function(req,res) {
        const { id } = req.params;
        const prods = await productos.buscarProducto(id);
        res.json(prods);
    });

productosRouter.post('/', async function(req,res) {
    const datos = req.body;
    await productos.agregarProducto(datos);
    res.redirect('/');

})

module.exports = productosRouter;