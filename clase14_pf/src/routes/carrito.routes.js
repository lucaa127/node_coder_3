const express = require('express');
const { Router } = express;
const carritoRouter = Router();

const carrito = require('../carrito.js');


    carritoRouter.get ('/:id/productos', async function(req,res) {
        const { id } = req.params;
        const prods = await carrito.listarProductosCarrito(id);
        //console.log (prods)
        res.json(prods);
    });
    
    carritoRouter.get ('/:id/productos/:id_prod', async function(req,res) {
        const { id } = req.params;
        const { id_prod } = req.params;
        
        const prods = await carrito.buscarProductoCarrito(id, id_prod);
        res.json(prods);
    });



carritoRouter.post('/', async function(req,res) {
    const carritoId = await carrito.crearCarrito();
    
    res.json(`Carrito de compras ID: ${carritoId}  generado.`);

})

carritoRouter.post ('/:id/productos', async function(req,res) {
    const { id } = req.params;
    const producto = req.body;
    await carrito.agregarProducto(id, producto);
    
    res.json(producto);
});

carritoRouter.delete ('/:id', async function(req,res) {
    const { id } = req.params;
    res.json(await carrito.eliminarCarrito(id));

});

carritoRouter.delete ('/:id/productos/:id_prod', async function(req,res) {
    const { id } = req.params;
    const { id_prod } = req.params;
    
    const prods = await carrito.eliminarProducto(id, id_prod);
    res.json(prods);

});





module.exports = carritoRouter;