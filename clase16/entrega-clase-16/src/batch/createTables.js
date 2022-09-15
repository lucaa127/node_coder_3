import knex from 'knex';
import { config } from '../utils/config.js';

const knexCli = knex(config.db);
const knexCliSqli = knex(config.db2);

knexCli.schema.dropTableIfExists('productos')
    .then(()=>{
        //{id, title, price, thumbnail
        knexCli.schema.createTable('productos', table => {
            table.increments('id').primary();
            table.string('title', 50).notNullable();
            table.decimal('price', 8, 2).notNullable();
            table.string('thumbnail',250).notNullable();
        })
            .then(()=> console.log("Tabla de productos creada"))
            .catch(err=> {
                console.log(err); 
                throw err;
            })
            .finally(()=>{
                knexCli.destroy();
            });
    });


    knexCliSqli.schema.dropTableIfExists('mensajes')
    .then(()=>{

        knexCliSqli.schema.createTable('mensajes', table => {
            table.increments('id').primary();
            table.string('mail', 90).notNullable();
            table.string('mensaje', 150).notNullable();

        })
            .then(()=> console.log("Tabla de mensajes creada"))
            .catch(err=> {
                console.log(err); 
                throw err;
            })
            .finally(()=>{
                knexCliSqli.destroy();
            });
    });

