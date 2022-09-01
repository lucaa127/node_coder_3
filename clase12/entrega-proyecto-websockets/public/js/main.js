const socket = io();

socket.on('from-server-data', data => {

const arrData = [];
arrData.push(data.listarProds);
    dataToTable(...arrData);

});


const form = document.querySelector('#form');
form.addEventListener('submit', e => {
    e.preventDefault()

    const data = {title: form[0].value, price: form[1].value, thumbnail: form[2].value};
    form.reset();
    socket.emit('from-client-data', data);

});

function render(data) {   
    document.querySelector('#tabla').innerHTML = data;
}


function dataToTable(datos) {
    
    fetch('layouts/productos.hbs')
    .then(respuesta => respuesta.text())
    .then( plantilla => {
 
        var template = Handlebars.compile(plantilla);
        let status = false;
        if (datos.length > 0){ 
            status = true;
        };

        let html = template({ datos: datos, statusList: status})
        //console.log(html)
        render(html);

    })
};



//CHAT

socket.on('from-server-mensajes', data => {
    console.log('mensajes:', data.CHAT_MENSAJES);
    renderChat(data.CHAT_MENSAJES);
});

function renderChat(mensajes) {
    const cuerpoMensajesHTML = mensajes.map((msj)=>{
        return `<span><b>${msj.author}: </b><span>${msj.text}</span></span>`;
    }).join('<br>');  
    console.log(cuerpoMensajesHTML);  

    document.querySelector('#chat').innerHTML = cuerpoMensajesHTML;
}

function sendMessage() {
    const inputUser = document.querySelector('#mail');
    const inputContenido = document.querySelector('#msj');

    const mensaje = {
        author: inputUser.value,
        text: inputContenido.value
    }

    socket.emit('from-client-mensaje', mensaje);
}


