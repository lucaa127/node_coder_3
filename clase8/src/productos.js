class Productos {
    constructor(){
        this.prods = [];
    }

//Listar productos
        async listarProductos(){
            try{
                if (this.prods.length == 0) {
                    return 'Sin productos registrados';
                } else { 
                    return this.prods;
                };
            } catch(error) { console.log(error)}
        };

//Listar producto por ID 
        async buscarProducto(id){
            try {
                    let producto = this.prods.find((x)=> x.id == id);
                        if (producto == undefined){
                            return {Error: 'Producto no encontrado'};
                        } else { 
                            return producto;
                        }

            }   catch(error)    { console.log(error)}
        };

// Agregar producto (POST)
        async agregarProducto(prod){
            try     {   
                        let newId = 0;
                        const objetos = await this.listarProductos();
                        
                        if (this.prods.length == 0) {
                            newId = 1;
                        } else { 
                            const prodIds = objetos.map( x => {return  parseInt(x.id) } );
                            let maxId = Math.max(...prodIds);
                            newId = maxId + 1;
                     };

                    let nuevoProducto = {...prod, id: newId}
                    this.prods.push(nuevoProducto);
                    
                    return nuevoProducto;

            } catch(error) {    console.log(error);    };
        };

//Actualizar producto por ID  (PUT)        
        async actualizarProducto(id, producto){
            try {
                    let prod = this.prods.find((x)=> x.id == id);
                        if (prod == undefined){
                            return {Error: 'Producto no encontrado'};
                        } else { 
                            const {title, price, thumbnail} = producto;
                            prod.title = title;
                            prod.price = price;
                            prod.thumbnail = thumbnail;

                            return { UPDATE : `producto id: ${id} actualizado correctamente` }}
                        

            }   catch(error)    {  console.log(error)  }
        };

//Borrar producto por ID 
        async borrarProducto(id){
            try {
                    let producto = this.prods.find((x)=> x.id == id);
                        if (producto == undefined){
                            return {Error: 'Producto no encontrado'};
                        } else { 
                            this.prods.splice (id - 1, 1)
                            return { DELETED : `El producto id: ${id} se ha eliminado correctamente` };
                        };

            }   catch(error)    { console.log(error)}
        };


};

let prods = new Productos(); 

module.exports = prods;
