const fs = require('fs/promises');

class Producto {
    constructor(archivo){
        //this.productos = [];
        this.archivoRuta = archivo;
    }

//métodos

    async listarProductos(){ 

        try { 
            const objetos = await fs.readFile(this.archivoRuta,'UTF-8');
            return JSON.parse(objetos);
            }
          catch(error){
            return([]);
          }
        };


    async buscarProducto(id){
        try {   
                const prods = await this.listarProductos();
                let producto = prods.find((x)=> x.id == id);
                    if (producto == undefined){
                        return {Error: 'Producto no encontrado'};
                    } else { 
                        return producto;
                    }

        }   catch(error)    { console.log(error)}
    };


    async agregarProducto(producto) {
        try{
            let newId = 0;
            const prods = await this.listarProductos();

            if(this.productos.length == 0){
                newId = 1;
            }   else   {
                const prodIds = prods.map( x =>{ return parseInt(x.id) } );
                let maxId = Math.max(...prodIds);
                newId = maxId + 1;
            };

            const nuevoObjeto = {...producto, id: newId};
            this.productos.push(nuevoObjeto);

        }   catch(error)    {console.log(error)};

    };

};

let prods = new Producto('./productos.txt')

module.exports = prods;

