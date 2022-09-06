const express = require('express');
const { Router } = express;
const carritoRouter = Router();

const carrito = require('../carrito.js');

carritoRouter.get('/', async function(req,res) {
    let status = false;

    const listarProds = await carrito.listarProductos();
        if (listarProds.length > 0){ 
            status = true;
        };
    res.send(listarProds);

});

carritoRouter.get ('/:id', async function(req,res) {
        const { id } = req.params;
        const prods = await carrito.buscarProducto(id);
        res.json(prods);
    });

carritoRouter.post('/', async function(req,res) {
    const datos = req.body;
    await carrito.agregarProducto(datos);
    res.redirect('/');
})

module.exports = carritoRouter;