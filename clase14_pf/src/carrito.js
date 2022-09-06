
const fs = require('fs/promises');

class Carrito {
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


    async agregarProducto(id,productos) {
        try{

            // users = users.map((user) => {
            //     user.tasks = [...toDoList];
            //     return user;
            //   });


                const nuevoObjeto = {...producto, id: newId};
                this.productos.push(nuevoObjeto);

        }       catch(error)    {console.log(error)};

    };

};

let carrito = new Carrito('./carrito.txt')

module.exports = carrito;
