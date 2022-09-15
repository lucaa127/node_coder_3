import express from 'express';

import { Router } from 'express';
const productosRouter = express.Router();

import productos from '../productos.js'
import { ContenedorSQL } from '../container/ContenedorSQL.js'

const apiProductos = new ContenedorSQL('productos');

productosRouter.get('/', async function(req,res) {
    let status = false;

    res.render('form');

    const listarProds = await apiProductos.listarProductos();
        if (listarProds.length > 0){ 
            status = true;
        };
    res.render('productos', {datos:listarProds, statusList: status});

});



// productosRouter.post('/', async function(req,res) {
//     const datos = req.body;
//     await productos.agregarProducto(datos);
//     //agregarDatos();
//     res.redirect('/');
// })


productosRouter.post('/', async function(req,res) {
    const datos = req.body;
    //await productos.agregarProducto(datos);
    //agregarDatos();
    await apiProductos.insertarProducto(datos);
    console.log('Producto registrado');
    res.redirect('/');
})




//module.exports = productosRouter;
export default productosRouter;

