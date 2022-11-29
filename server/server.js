const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors())

const server = http.createServer(app)
const { Server } = require('socket.io');
const io = new Server(server, {
	cors: {
		origin: ['http://localhost:5173']
	}
})

io.on('connection', (socket) => {
	socket.on('join_room', (data) => {
		socket.join(data)
		socket.emit('room_message', `You joined room ${data}`)
	});

	socket.on('send_message', (data) => {
		socket.to(data.room).emit('receive_message', data)

	})

})

server.listen(3000)