var socket = io();

// nos indica que hay conexión con el servidor (on = escuchar)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// conexión perdida con el servidor (on = escuchar)
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// envia información al servidor (emit = enviar/emitir)
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});

// escucha información recibida del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});