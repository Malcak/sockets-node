let socket = io();

// Escuchar información
socket.on('connect', function () {
	console.log('conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('Perdimos conección con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
	usuario: 'Fernando',
	mensaje: 'Hola mundo'
}, function (resp) {
	console.log('respuesta server:', resp);
});

// Escuchar info
socket.on('enviarMensaje', function (mensaje) {
	console.log('Servidor:', mensaje);
});