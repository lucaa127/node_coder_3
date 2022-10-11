import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        return this.coleccion.find({_id: id})
    }

    async listarAll() {
        return this.coleccion.find({})
    }

    async guardar(nuevoElem) {
        return this.coleccion.create(nuevoElem)
    }

    async actualizar(id, nuevoElem) {
        return this.coleccion.updateOne({_id: id}, {$set: nuevoElem})
    }

    async borrar(id) {
        return this.coleccion.deleteOne({_id: id})
    }

    async borrarAll() {
        return this.coleccion.deleteMany({})
    }
}

export default ContenedorMongoDb