const express = require('express');
const Contenedor = require('./main.js');
const app = express();


let file = new Contenedor("./file.txt");

let files;

async function readFile() {
                try { 
                    files = await file.getAll();
                    //console.log(files);
            } catch(error) { console.log(error); } 
        };

async function randomProd(id) {
    try { 
            let randomData = await file.getById(id);
            return randomData;
    } catch(error) { console.log(error); } 
};


app.get('/', (request,response)=>{
    response.send('Entrega clase 6');
})

app.get('/productos', (req, res) => {
    res.send(files);
})


app.get('/productoRandom', (req, res) => {
   
    let random = (Math.floor(Math.random() * files.length)+ 1);
    //let randomProd = file.getById(random);
    let dataRand; 
    async () => {
        dataRand = await randomProd(random) ;
        console.log(dataRand)
        
    }

    res.send(dataRand);

})


app.get('*', (request,response)=>{
    response.send('Error 404 - Page not found')
})

readFile();

const PORT = 8080;
const server = app.listen(PORT, ()=>{
 console.log(`Escuchando en puerto: ${PORT}`);
 
})

