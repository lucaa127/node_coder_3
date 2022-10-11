import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class PersonasDaoMongoDb extends ContenedorMongoDb {

    // constructor() {
    //     super('personas', {
    //         nombre: { type: String, required: true },
    //         apellido: { type: String, required: true },
    //         edad: { type: Number, required: true },
    //     })
    // }


    constructor() {
        super('productos', {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true },
            stock: { type: Number, required: true },
        })
    }



}

export default PersonasDaoMongoDb
