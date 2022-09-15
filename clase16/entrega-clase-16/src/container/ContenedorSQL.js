import knex from 'knex';
import { config } from '../utils/config.js';

// clase para mysql/mdb y Sqlite

export class ContenedorSQL {
    constructor(tableName){
        this.knexMysqlCli = knex(config.db);
        this.knexSqliteCli = knex(config.db2);
        this.tableName = tableName;
    }

    async listarProductos(){
        try {
            return await this.knexMysqlCli.from(this.tableName).select('*').orderBy('id', 'asc');
        } catch (error) {
            throw error;
        }
    }

    async buscarProducto(id){
        try {
            return await this.knexMysqlCli.from(this.tableName).select('*').where({id: id});
        } catch (error) {
            throw error;
        }
    }

    async insertarProducto(obj){
        try {
            return await this.knexMysqlCli(this.tableName).insert(obj);
        } catch (error) {
            throw error;
        }
    }

//CHAT
    async insertarMensaje(obj){
        try {
            return await this.knexSqliteCli(this.tableName).insert(obj);
        } catch (error) {
            throw error;
        }
    }

    async listarMensajes(){
        try {
            return await this.knexSqliteCli.from(this.tableName).select('*').orderBy('id', 'asc');
        } catch (error) {
            throw error;
        }
    }

    //CIERRE 

    cerrarConexion(){
        this.knexMysqlCli.destroy();
        this.knexSqliteCli.destroy();
        
    }

}

