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
    res.render('pages/productos', {datos:listarProds, statusList: status});

});



productosRouter.post('/', async function(req,res) {
    const datos = req.body;
    await productos.agregarProducto(datos);
    //agregarDatos();
    res.redirect('/');
})

module.exports = productosRouter;