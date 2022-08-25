const express = require('express');
//const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");


const productosRouter = require('./src/routes/productos.routes.js');

app.use('/api/productos', productosRouter);


app.get('/', (req, res)=>{
    //res.render('form');
    res.render("pages/layout", { data: [], statusList: false });

})

const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Escuchando puerto: ${PORT}`);
});