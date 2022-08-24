const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));




const productosRouter = require('./src/routes/productos.routes.js');

app.use('/api/productos', productosRouter);


app.get('/', (req, res)=>{
    res.render('form');
    
})

const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Escuchando puerto: ${PORT}`);
});