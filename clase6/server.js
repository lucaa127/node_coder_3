//console.log('server')

const {request, response} = require('express');
const express = require('express');

const app = express();

app.get('/', (request,response)=>{
    response.send('Servidor iniciado')
})

app.get('*', (request,response)=>{
    response.send('Error 404 - Page not found')
})


const server = app.listen(3000, ()=>{

    console.log('Escuchando en puerto:')
})