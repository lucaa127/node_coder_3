const fs = require('fs/promises');

class Contenedor{
    constructor(archivo){
        this.archivoRuta = archivo;
    }
    //métodos

    //mostrar objetos del archivo
    async getAll(){ 

        try { 
            const objetos = await fs.readFile(this.archivoRuta,'UTF-8');
            return JSON.parse(objetos);
            }
          catch(error){
            return([]);
          }
        };

    //mostrar objeto por id    
    async getById(id){
        try {
            let objetos = await this.getAll();
            objetos = objetos.find(x => x.id == id)
            
            if (objetos === undefined){
                return `No se pudo encontrar el producto con id: ${id}`;
                } else {
            return objetos;}

        }   catch(error) { return 'Error al buscar producto por ID'}
    };

    
    // guardar objeto    
    async save(objeto){
        try{
            const objetos = await this.getAll();
            let newId = 0;

                if (objetos.length == 0){
                    newId = 1;
                } else {

                    let valorIds = objetos.map( ids => { return parseInt(ids.id) } );
                    let maxID = Math.max(...valorIds)

                    newId = maxID + 1;
                };

            const objetoNuevo = {...objeto,id: newId};
              objetos.push(objetoNuevo);

            await fs.writeFile(this.archivoRuta, JSON.stringify(objetos));

        } catch(error) {
            console.log('Error al guardar');
            }
    };       
        
    //eliminar por id
    async deleteById(id) {
        try{
            let objetos = await this.getAll();
            const objToDelete = objetos.findIndex(x => x.id == id);
                if (objToDelete !== -1){
                   objetos = objetos.filter(x => x.id !== id);
                   await fs.writeFile(this.archivoRuta,JSON.stringify(objetos));
            } else {
                   console.log (`El producto id:${id}, no existe.`)
            }
        } catch(error) {
            console.log ('Error al eliminar por ID')
        }
    };

    //limpiar el archivo
    async deleteAll(){
        try{
                await fs.writeFile(this.archivoRuta,JSON.stringify([]));
                return 'Se han eliminado todos los productos correctamente';
              }   catch(error)    {
                    return 'error al eliminar los productos';
        }      
    };

};





//Ejecuto los métodos

const archivo = new Contenedor('./file.txt');
    
async function ejecutar(){
    try {
        //save
        let producto1 = {title: "Producto 1", price: 1999.9, thumbnail: "url del primer producto"}
        let producto2 = {title: "Producto 2", price: 1800, thumbnail: "url del segundo producto"}
        
        //await archivo.save(producto1);
        //await archivo.save(producto2);

        //get by id    

        //console.log(await archivo.getById(1));

        //get All
            //console.log(await archivo.getAll());


        //delete by id 
           // await archivo.deleteById(3);    

        //delete all
            //console.log (await archivo.deleteAll()); 


        }   catch(error)  { console.log('error') };

};


ejecutar();
