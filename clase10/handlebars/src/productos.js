
class Producto {
    constructor(){
        this.productos = [];
    }

        async listarProductos(){
            try{
                if (this.productos.length == 0){
                    return []
                } else {
                    return this.productos;
                };

            }   catch(error)   {    console.log(error)   };

        };


        async agregarProducto(producto) {
            try{
                let newId = 0;
                const objs = await this.listarProductos();

                if(this.productos.length == 0){
                    newId = 1;
                }   else   {
                    const prodIds = objs.map( x =>{ return parseInt(x.id) } );
                    maxId = Math.max(...prodIds);
                    newId = maxId + 1;
                };

                const nuevoObjeto = {...producto, id: newId};
                this.productos.push(nuevoObjeto);

            }   catch(error)    {console.log(error)};

        };

};


let prods = new Producto();
module.exports = prods;
