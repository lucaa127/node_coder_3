
const fs = require('fs/promises');

class Carrito {
    constructor(archivo){
        //this.productos = [];
        this.archivoRuta = archivo;
    }

//métodos


    async crearCarrito(){ 

        try { 
            //const objetos = await fs.readFile(this.archivoRuta,'UTF-8');
            
            let newId = 0;
            const arrCarritos = await this.listarCarritos();
            if(arrCarritos.length == 0){
                newId = 1;
            }   else   {
                let cartIds = arrCarritos.map( x =>{ return parseInt(x.id) } );
                let maxId = Math.max(...cartIds);
                newId = maxId + 1;
            };

            const dtNow = Date.now();
            const fecha = new Date(dtNow);

            const datosCarrito = {timestamp: fecha , productos: []};
            const nuevoObjeto = {...datosCarrito, id: newId};

            arrCarritos.push(nuevoObjeto);
            await fs.writeFile(this.archivoRuta, JSON.stringify(arrCarritos));

            return newId;
            }
        catch(error){
            return(error);
            }
        };


    async listarCarritos(){ 

        try { 
            const objetos = await fs.readFile(this.archivoRuta,'UTF-8');
            return JSON.parse(objetos);
            }
        catch(error){
            return([]);
            }
        };



    async listarProductosCarrito(id){ 

        try { 
            const prods = await this.listarCarritos();
            let productos = prods.find( x => x.id == id);
                if (productos.productos.length < 1 ){
                    return {Error: 'No hay productos en el carrito'};
                } else { 
                    return productos.productos;
                }

            }
          catch(error){
            return(error);
          }
        };


    async buscarProductoCarrito(idc, idp){
        try {   
                const prods = await this.listarProductosCarrito(idc);
                let producto = prods.find((x)=> x.id == idp);
                    if (producto == undefined){
                        return {Error: 'Producto no encontrado'};
                    } else { 
                        return producto;
                    }

        }   catch(error)    { console.log(error)}
    };


    async agregarProducto(id,productos) {
        try{

            const obtenerCarritos = await this.listarCarritos();
            let carritoPorId = obtenerCarritos.find( x => x.id == id);
            
            obtenerCarritos.map(async cart => {
                if(cart.id == carritoPorId.id){
                    cart.productos.push(productos);
                    await fs.writeFile(this.archivoRuta, JSON.stringify(obtenerCarritos));
                } else {
                    
                    return 'El carrito no existe'
                }
            }) 

        }       catch(error)    {console.log(error)};

    };


    async eliminarCarrito(id) {
        try{
            const obtenerCarritos = await this.listarCarritos();
            const carritoPorId = obtenerCarritos.find( x => x.id == id);

            console.log(carritoPorId)
                if(carritoPorId == undefined){
                    return 'El carrito no existe';
                    
                } else {
                    obtenerCarritos.splice (id - 1, 1)
                    await fs.writeFile(this.archivoRuta, JSON.stringify(obtenerCarritos));
                    return {mensaje: `Se ha vaciado el carrito id: ${id}`};
                    }
            }    catch(error)  {console.log(error)};
    };


    async eliminarProducto(idc, idp) {
        try{
            const obtenerCarritos = await this.listarCarritos();
            const carritoPorId = obtenerCarritos.find( x => x.id == idc);

            console.log(carritoPorId)

            if(carritoPorId == undefined){
               return {error: `El carrito id: ${idc} no existe.`};
            } else {
            obtenerCarritos.map(async cart => {
                if(cart.id != 0){
                    cart.productos.splice (idp - 1, 1);
                    await fs.writeFile(this.archivoRuta, JSON.stringify(obtenerCarritos));
                        } 
                    });

                };

            }    catch(error)  {console.log(error)};
    };

};

let carrito = new Carrito('./carrito.txt')

module.exports = carrito;
