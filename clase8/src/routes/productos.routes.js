const express = require('express');
const productosRouter = express.Router();

const productos = require('../productos.js');

    productosRouter.get ('/',(req,res)=>{

        (async function (){
            const prods = await productos.listarProductos();
            res.send(prods);
        })();
        });
        
    productosRouter.get ('/:id',(req,res)=>{
        const { id } = req.params;

        (async function (){
            const prods = await productos.buscarProducto(id);
            res.json(prods);
            })();
        });

    productosRouter.delete ('/:id',(req,res)=>{
        const { id } = req.params;
        (async function (){
            const prods = await productos.borrarProducto(id);
            res.json(prods);
            })();
        });
        
    productosRouter.put('/:id', (req,res)=>{
        (async function (){
        const { id } = req.params;
        const prod = req.body;
        res.json(await productos.actualizarProducto(id,prod));
    })();
    });
    
    productosRouter.post ('/', (req,res)=>{
        (async function (){
            const producto = req.body; //await productos.buscarProducto(id);
            res.send(await productos.agregarProducto(producto));
           
           })();
    });


module.exports = productosRouter;