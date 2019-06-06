const { io } = require('../server');

// permite reconocer la conexión de un cliente al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // emite un mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escucha los mensajes del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // envia el mensaje a todos los clientes
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!!!'
        //     });
        // }
    });
});