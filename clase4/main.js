class Contenedor{

    constructor(archivo){
        this.archivo = archivo;
        
        }

    getAll() {

        let ruta = "./" + this.archivo;
        const fs = require('fs')

        let data;

        data = fs.readFileSync(ruta, 'utf-8', (err, cont) => {
            if (err) {
                console.log('error: ', + err)
            }
        })

        if (data === "") {
            data = []
            return data
        } else {return JSON.parse(data)}
    
    }

    save(objeto){
            let ruta = "./" + this.archivo;
            const fs = require('fs')
            const arrObj = this.getAll();
            
            let newId = 0

                if (arrObj.length == 0) {
                    newId = 1
                }   else    {
                    newId = arrObj[arrObj.length - 1].id + 1
                }
            
            const newObj = {...objeto, id: newId}
            arrObj.push(newObj)         

         //WRITE

            async function write() {
                   try {
                
                    await fs.promises.writeFile(ruta,JSON.stringify(arrObj))
                    console.log ("Producto registrado con id: " + newId)
                    
                }
                    catch(err) {
                    //errc
                    console.log("error escritura")
                    }
                };

            write();
        return newId;

            } //CIERRE METODO SAVE
    

    getById(id){

                const arrObj = this.getAll();
                let objByID = arrObj.find (obj => obj.id == id)
                if (objByID === undefined) {objByID = null}
                console.log(objByID)
                
            }

    deleteById(id){
        const fs = require('fs')
        let ruta = "./" + this.archivo;
        const arrObj = this.getAll();
        let newObj = arrObj.filter (obj => obj.id !== id)
        let objJson = JSON.stringify(newObj)


            async function reWrite() {
                try {
            
                await fs.promises.writeFile(ruta,objJson,null,2)
                console.log (`objeto id: ${id} eliminado`)
                //console.log (newObj)
            }
                catch(err) {
                //errc
                console.log("error de escritura")
                }
            };

            reWrite();
        }
 

    deleteAll(){

        const fs = require('fs')
        let ruta = "./" + this.archivo;
 
                async function del() {
                    try {
                
                    await fs.promises.writeFile(ruta,JSON.stringify([]))
                    console.log ("Se ha borrado el contenido del archivo")
                    
                }
                    catch(err) {
                    //err
                    console.log("error de eliminando contenido")
                    }
                };

            del();
        }

    } //CIERRE CONTENEDOR


// PRUEBAS 

        let archivo1 = new Contenedor("file.txt")
        
        let producto1 = {title: "Producto 1", price: 1999.9, thumbnail: "url del primer producto"}
        let producto2 = {title: "Producto 2", price: 2999.9, thumbnail: "url del producto 2"}
        let producto3 = {title: "Producto 3", price: 900.0, thumbnail: "url del tercer producto"}


//archivo1.save(producto2);

// let leerArchivo = archivo1.getAll();
// console.log(leerArchivo)
    
//archivo1.getById(3);       
      
//archivo1.deleteById(3)
//archivo1.deleteAll()
